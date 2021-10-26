const _getDOMElem = id => {
    return document.getElementById(id);
};

export const mapListToDOMElements = ListOfId => {
    const _viewElems = {};

    // console.log(ListOfId);

// dynamiczne tworzenie kolejnych elementów obiektu _viewElems
    for(const id of ListOfId){
        // console.log('id',id);
        _viewElems[id] = _getDOMElem(id);
    };

    console.log(_viewElems);

    return _viewElems;
};