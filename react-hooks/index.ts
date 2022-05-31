import {useRef, useEffect} from 'react';

export function useAbortController(): [AbortSignal, (reason?: any) => void] {
  const ctrl = useRef<AbortController>(new AbortController()).current;
  const abort = ctrl.abort.bind(ctrl);

  useEffect(() => abort, []);

  return [ctrl.signal, abort];
}

export function useUnmountSignal(): AbortSignal {
  const ctrl = useRef<AbortController>(new AbortController()).current;

  useEffect(() => () => ctrl.abort(), []);

  return ctrl.signal;
}
