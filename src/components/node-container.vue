<template>
    <div class="node-container card" @click.left.stop="selectNode" ref="nodeContainer" :node-type="node.type.id" :class="{ 'selected-node': isSelectedNode }">
        <span class="component-type tag">{{node.type.name}}</span>
        <header class="node-header card-header p-sm p-t-lg" ref="headerElement">
            <slot name="header">
                Node Heading Goes Here
            </slot>
        </header>
        <div class="node-content card-content is-paddingless">
            <slot name="content">
                Node Content Goes Here
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Prop, Component, Vue} from "vue-property-decorator";
    import {INode} from "../models/nodes/inode";
    import * as interact from "interactjs";
    import {Mutation, State} from "vuex-class";

    @Component
    export default class extends Vue
    {
        public name = "node-container";

        @Prop()
        public node: INode;

        @Mutation('selectNode')
        public changeSelectedNode;

        @State(state => state.editor.selectedNode)
        public selectedNode;

         public updatePosition(newPosition) {
            this.$emit("update:position", newPosition);
        }

        public selectNode() {
            this.changeSelectedNode(this.node);
        }

        public get isSelectedNode () {
            if(!this.selectedNode) { return false; }
            return this.selectedNode.id === this.node.id;
        }

        public refreshPosition()
        {
            const nodeContainer = <HTMLElement>this.$refs.nodeContainer;
            nodeContainer.style.top = `${this.node.position.y}px`;
            nodeContainer.style.left = `${this.node.position.x}px`;
        }

        /*
        private previousPosition = new Point();
        private isDragging = false;

        public refreshPosition()
        {
            const nodeContainer = <HTMLElement>this.$refs.nodeContainer;
            nodeContainer.style.top = `${this.node.position.y}px`;
            nodeContainer.style.left = `${this.node.position.x}px`;
        }

        public mouseDownEvent(evt: MouseEvent)
        {
            if(evt.button != 0) { return; }

            const dragHandle = <HTMLElement>this.$refs.headerElement;
            if(evt.target != dragHandle) { return; }

            this.setDragging(true);
            this.previousPosition.x = evt.pageX;
            this.previousPosition.y = evt.pageY;
        }

        public mouseMoveEvent(evt: MouseEvent)
        {
            if(!this.isDragging) { return; }
            const changedX = (this.previousPosition.x - evt.pageX);
            const changedY = (this.previousPosition.y - evt.pageY);

            this.node.position.x -= changedX;
            this.node.position.y -= changedY;

            this.previousPosition.x = evt.pageX;
            this.previousPosition.y = evt.pageY;
            this.refreshPosition();
        }

        public mouseOutEvent(evt: MouseEvent)
        {
            if(!this.isDragging) { return; }

            const containerNode = <HTMLElement>this.$refs.nodeContainer;
            const parentNode = containerNode.parentElement;
            if(evt.target == parentNode) {
                this.resetEvent();
            }
        }

        public resetEvent()
        {
            this.setDragging(false);
            this.previousPosition.x = 0;
            this.previousPosition.y = 0;
        }

        public setDragging(isDragging: boolean)
        {
            this.isDragging = isDragging;
            const container = <HTMLElement>this.$refs.nodeContainer;

            if(isDragging)
            { container.classList.add("is-dragging"); }
            else
            { container.classList.remove("is-dragging"); }
        }

        public mounted()
        {
            const dragHandle = <HTMLElement>this.$refs.headerElement;
            this.draggableOptions.handle = dragHandle;
            this.draggableOptions.boundingElement = this.$parent.$refs.diagramContainer;
            this.refreshPosition();

            dragHandle.addEventListener("mousedown", this.mouseDownEvent);
            dragHandle.addEventListener("mousemove", this.mouseMoveEvent);
            dragHandle.addEventListener("mouseout", this.mouseOutEvent);
            dragHandle.addEventListener("mouseup", this.resetEvent);
        }

        public beforeDestroy()
        {
            const dragHandle = <HTMLElement>this.$refs.headerElement;
            dragHandle.removeEventListener("mousedown", this.mouseDownEvent);
            dragHandle.removeEventListener("mousemove", this.mouseMoveEvent);
            dragHandle.removeEventListener("mouseout", this.mouseOutEvent);
            dragHandle.removeEventListener("mouseup", this.resetEvent);
        }*/

        public dragMoveListener(evt: any){
            console.log("args", evt);
            this.node.position.x += evt.dx;
            this.node.position.y += evt.dy;
            this.refreshPosition();
        }

        public mounted()
        {
            this.refreshPosition();

            const dragConfig: any = {
                onmove: this.dragMoveListener/*,
                restrict: {
                    restriction: this.$parent.$refs.diagramContainer
                },*/
            };
            const handle = <HTMLElement>this.$refs.headerElement;
            const startInteract: any = interact;
            startInteract(handle)
                .draggable(dragConfig);
        }
    }
</script>

<style lang="scss">

    .node-container
    {
        position: absolute !important;
        width: 23em;
        border: 0.25em solid rgba(0,0,0,0.1);
        border-radius: 0.25em;

        &.selected-node
        {
            border: 0.45em solid rgba(yellow, 0.6);
        }
    }

    .node-header
    {
        pointer-events: auto;

        & input
        {
            user-select: text;
        }
    }

    .component-type
    {
        position: absolute;
        left: 0.5em;
    }
</style>