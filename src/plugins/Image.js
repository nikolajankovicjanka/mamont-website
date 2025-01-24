import images from '../assets/images/index';

const Image = {
    install: function (app) {
        app.config.globalProperties.$img = function (img) {
            if (images[img]) {
                return images[img];
            } else {
                console.error(`Image '${img}' not found in images object.`);
                return '';
            }
        };
    }
};

export default Image;