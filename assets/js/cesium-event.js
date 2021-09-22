
function bindViewerEvent (viewer) {

    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOWN);
    const leftDownEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('LEFT_DOWN:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.LEFT_DOWN;
        event.typeName = 'left_down';

        leftDownEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
    //设置鼠标左键弹起事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP);
    const leftUpEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('LEFT_UP:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.LEFT_UP;
        event.typeName = 'left_up';

        leftUpEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.LEFT_UP);
    //设置鼠标左键单击事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
    const leftClickEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('LEFT_CLICK:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.LEFT_CLICK;
        event.typeName = 'left_click';

        leftClickEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    //设置鼠标左键双击事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    // } else {
    const leftDoubleClickEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('LEFT_DOUBLE_CLICK:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK;
        event.typeName = 'left_double_click';

        leftDoubleClickEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    //设置鼠标右键按下事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_DOWN);
    const rightDownEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('RIGHT_DOWN:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.RIGHT_DOWN;
        event.typeName = 'right_down';

        rightDownEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.RIGHT_DOWN);
    //设置鼠标右键弹起事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_UP);
    const rightUpEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('RIGHT_UP:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.RIGHT_UP;
        event.typeName = 'right_up';

        rightUpEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.RIGHT_UP);
    //设置鼠标右键点击事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    const rightClickEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('RIGHT_CLICK:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.RIGHT_CLICK;
        event.typeName = 'right_click';

        rightClickEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    //设置鼠标中键按下事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MIDDLE_DOWN);
    const middleDownEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('MIDDLE_DOWN:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.MIDDLE_DOWN;
        event.typeName = 'middle_down';

        middleDownEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.MIDDLE_DOWN);
    //设置鼠标中键弹起事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MIDDLE_UP);
    const middleUpEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('MIDDLE_UP:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.MIDDLE_UP;
        event.typeName = 'middle_up';

        middleUpEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.MIDDLE_UP);
    //设置鼠标中键点击事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MIDDLE_CLICK);
    const middleClickEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('MIDDLE_CLICK:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.MIDDLE_CLICK;
        event.typeName = 'middle_click';

        middleClickEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.MIDDLE_CLICK);
    //设置鼠标移动事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    const mouseMoveEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((event) => {
        // console.log('MOUSE_MOVE:', event);
        event = Object.assign({}, event);
        event.type = Cesium.ScreenSpaceEventType.MOUSE_MOVE;
        event.typeName = 'mouse_move';

        mouseMoveEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);


    //设置鼠标滚轮事件
    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.WHEEL);
    const mouseWheelEvent = new Cesium.Event();
    viewer.screenSpaceEventHandler.setInputAction((delta) => {
        // console.log('MOUSE_WHEEL:', delta);
        const event = {
            delta: delta,
        };
        event.type = Cesium.ScreenSpaceEventType.WHEEL;
        event.typeName = 'mouse_wheel';
        mouseWheelEvent.raiseEvent(event);
    }, Cesium.ScreenSpaceEventType.WHEEL);



    const CesiumEvent = {
        leftDownEvent , leftUpEvent , leftClickEvent , leftDoubleClickEvent , rightDownEvent , rightUpEvent,rightClickEvent,
        middleDownEvent,mouseWheelEvent,mouseMoveEvent , middleClickEvent , middleUpEvent
    }

    return CesiumEvent


}