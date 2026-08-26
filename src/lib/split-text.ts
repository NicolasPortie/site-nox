type RevertFn = () => void;
type Revertible = { revert: () => unknown };

const revertors = new Set<RevertFn>();

export function onceRevert<T extends Revertible>(split: T): T {
  const original = split.revert.bind(split);
  let done = false;
  split.revert = (() => {
    if (done) return split;
    done = true;
    return original();
  }) as T['revert'];
  return split;
}

export function onSplitRevert(fn: RevertFn) {
  revertors.add(fn);
  return () => {
    revertors.delete(fn);
  };
}

export function revertAllSplits() {
  const fns = [...revertors];
  revertors.clear();
  fns.forEach((fn) => fn());
}
