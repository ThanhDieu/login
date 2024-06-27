import { useCallback, useLayoutEffect, useRef, useReducer } from 'react';

type AsyncStatus = 'idle' | 'pending' | 'resolved' | 'rejected';

interface AsyncState<Data> {
    status: AsyncStatus;
    data: Data | null;
    error: Error | null;
}

function useSafeDispatch<Dispatch extends (...args: any[]) => void>(dispatch: Dispatch) {
    const mounted = useRef(false);
    useLayoutEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);
    return useCallback(
        (...args: Parameters<Dispatch>) => (mounted.current ? dispatch(...args) : void 0),
        [dispatch]
    );
}

const defaultInitialState = {
    status: 'idle' as AsyncStatus,
    data: null,
    error: null
};

function useAsync<Data = any>(initialState?: Partial<AsyncState<Data>>) {
    const initialStateRef = useRef<AsyncState<Data>>({
        ...defaultInitialState,
        ...initialState,
    });

    const [{ status, data, error }, setState] = useReducer(
        (s: AsyncState<Data>, a: Partial<AsyncState<Data>>) => ({ ...s, ...a }),
        initialStateRef.current
    );

    const safeSetState = useSafeDispatch(setState);

    const setData = useCallback(
        (data: Data) => safeSetState({ data, status: 'resolved' }),
        [safeSetState]
    );

    const setError = useCallback(
        (error: Error) => safeSetState({ error, status: 'rejected' }),
        [safeSetState]
    );

    const reset = useCallback(
        () => safeSetState(defaultInitialState),
        [safeSetState]
    );

    const run = useCallback(
        (promise: Promise<Data>) => {
            if (!promise || !promise.then) {
                throw new Error(
                    `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
                );
            }
            safeSetState({ status: 'pending' });
            return promise.then(
                data => {
                    setData(data);
                    return data;
                },
                error => {
                    setError(error);
                    return Promise.reject(error);
                }
            );
        },
        [safeSetState, setData, setError]
    );

    return {
        isIdle: status === 'idle',
        isLoading: status === 'pending',
        isError: status === 'rejected',
        isSuccess: status === 'resolved',

        setData,
        setError,
        error,
        status,
        data,
        run,
        reset,
    };
}

export default useAsync;
