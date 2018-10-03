const mapIf = (predicate, mapper) => (element, index) => {
    if (predicate(element, index))
        return mapper(element, index);
    return element;
};

const not = predicate => (element, index) => !predicate(element, index);

const indexEven = (element, index) => index % 2 === 0;

export {mapIf, not, indexEven};