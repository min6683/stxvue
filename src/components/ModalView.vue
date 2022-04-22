<template>
    <div class="modal-wrap">
        <div class="modal">
            <button @click="closeModal"><i class="fas fa-times"></i></button>
            <b>이 사이트는 스터디용으로 제작되었으며<br>리소스는 원저작자에게 있습니다.</b>
            <div class="modal-desc">
                본 사이트는 Chrome에 최적화 되어있습니다. 
            </div> 
        </div>
    </div>
</template>

<script>
    import {
        getCurrentInstance
    } from 'vue';
    export default {
        emits: ['close-modal'],
        setup() {
            const {
                emit
            } = getCurrentInstance();
            const closeModal = () => {
                emit('close-modal');
            }
            return {
                closeModal
            }
        }
    }
</script>

<style>
    .modal-wrap {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 99999;
        border: 0;

    }

    .modal {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 400px;
        height: 250px;
        background-color: #fff;
        border-radius: 20px;
        text-align: center;
    }
    .modal i {
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translateX(-50%);
        display: block;
        font-size: 35px;
        cursor: pointer;
        border: 0;
        
    }
    .modal-wrap b {
        position: relative;
        display: block;
        margin-top: 40px;
        margin-bottom: 20px;
        text-align: center;
        color: #000;
        font-weight: 600;
    }
    .modal-desc {
        position: relative;
        display: block;
        text-align: center;
        font-size: 14px;
        color: #ccc;
        font-weight: 400;
        margin-top: 50px;
    }
</style>