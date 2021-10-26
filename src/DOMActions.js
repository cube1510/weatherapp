const _getDOMElem = id => {
    return document.getElementById(id);
};

export const mapListToDOMElements = ListOfId => {
    const _viewElems = {};

// dynamiczne tworzenie kolejnych elementów obiektu _viewElems
    for(const id of ListOfId){
        _viewElems[id] = _getDOMElem(id);
    };
    return _viewElems;
};