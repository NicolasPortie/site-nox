type RevertFn = () => void;

const revertors = new Set<RevertFn>();

export function onSplitRevert(fn: RevertFn) {
  revertors.add(fn);
  return () => {
    revertors.delete(fn);
  };
}

export function revertAllSplits() {
  [...revertors].forEach((fn) => fn());
}
