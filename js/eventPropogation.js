$(document).ready(function(){
    let capturePhases = [];
    let bubblePhases = [];
    var outeDiv = document.getElementById("outerDiv");
    var innerDiv = document.getElementById("innerDiv");
    var actionDiv = document.getElementById("actionDiv");
    var resultDiv = document.getElementById("resultDiv");
    var btnReset = document.getElementById("btnReset");

    var btnClick = document.getElementById("btnClick");
    var btnStopProp = document.getElementById("btnStopProp");
    var btnStopImmedProp = document.getElementById("btnStopImmedProp");
    var preDefaultCheckBox = document.getElementById("preDefaultCheckBox");
    

    btnReset.addEventListener("click", resetHandler);

    outeDiv.addEventListener("click", capturingPhaseClickHandler, true);
    innerDiv.addEventListener("click", capturingPhaseClickHandler, true);
    actionDiv.addEventListener("click", capturingPhaseClickHandler, true);
    btnClick.addEventListener("click", capturingPhaseClickHandler, true);

    outeDiv.addEventListener("click", bubblingPhaseClickHandler, false);
    innerDiv.addEventListener("click", bubblingPhaseClickHandler, false);
    actionDiv.addEventListener("click", bubblingPhaseClickHandler, false);
    btnClick.addEventListener("click", bubblingPhaseClickHandler, false);

    btnStopProp.addEventListener("click", stopPropogationCapturingHandler, true);
    btnStopProp.addEventListener("click", stopPropogationBubblingHandler);
    btnStopProp.addEventListener("click", stopPropogationOtherHandler);

    btnStopImmedProp.addEventListener("click", stopImmePropogationCapturingHandler, true);
    btnStopImmedProp.addEventListener("click", stopImmePropogationBubblingHandler);
    btnStopImmedProp.addEventListener("click", stopImmePropogationOtherHandler);

    preDefaultCheckBox.addEventListener("click", prevDefaultHandler);

    function capturingPhaseClickHandler(event) {
        capturePhases.push(event.currentTarget.className);
        setCapturingSection();
    } 
    function setCapturingSection(){
        $('div.capturingSection').empty();
        capturePhases.forEach((cp, i) => {
            $('div.capturingSection').append('<div>' + (i + 1) + " : " +cp + '</div>');
        });
    }

    function bubblingPhaseClickHandler(event) {
        bubblePhases.push(event.currentTarget.className);
        setBubblingSection();
    } 
    function setBubblingSection(){
        $('div.bubblingSection').empty();
        bubblePhases.forEach((cp, i) => {
            $('div.bubblingSection').append('<div>' + (i + 1) + " : " +cp + '</div>');
        });
    }
//----------- STOP PROPOGATION ----------------------------------
        function stopPropogationCapturingHandler(event) {
             capturePhases.push(event.currentTarget.className);
             setCapturingSection();
        } 
        function stopPropogationBubblingHandler(event) {
             event.stopPropagation();
             bubblePhases.push(event.currentTarget.className);
             setBubblingSection();
        } 

        function stopImmePropogationCapturingHandler(event) {
            capturePhases.push(event.currentTarget.className);
            setCapturingSection();
        } 

        function stopImmePropogationBubblingHandler(event) {
            event.stopImmediatePropagation();
            bubblePhases.push(event.currentTarget.className);
            setBubblingSection();
        } 

        function stopPropogationOtherHandler(event) {
            bubblePhases.push(event.currentTarget.className + " - Other EventHandler");
            setBubblingSection();
        } 

        function stopImmePropogationOtherHandler(event) {
            // console.log("stopImmePropogationOtherHandler ");
            bubblePhases.push(event.currentTarget.className + " - Other EventHandler");
            setBubblingSection();
        } 

        function prevDefaultHandler(event) {
            event.preventDefault();
        } 
        function resetHandler(event) {
            console.log("resetHandler");
            capturePhases = [];
            bubblePhases = [];
            $('div.capturingSection').empty();
            $('div.bubblingSection').empty();
        } 

});