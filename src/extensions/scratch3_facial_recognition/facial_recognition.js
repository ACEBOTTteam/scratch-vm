import * as faceapi from 'face-api.js';

class FacialRecognition {
    constructor(runtime, videoEl) {
        this.videoEl = videoEl
        this.runtime = runtime
    }

    async wait() {
        // const backend = tf.backend()
        // console.log(backend,'backend')
        tf.setBackend('webgl')
        await faceapi.nets.ssdMobilenetv1.loadFromUri('../../../static/weights')
        await faceapi.loadFaceLandmarkModel('../../../static/weights')
        await faceapi.loadFaceRecognitionModel('../../../static/weights')
    }
}