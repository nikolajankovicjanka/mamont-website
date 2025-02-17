// src/plugins/Image.js
import images from '../assets/images';  // Importujte slike iz src/assets/images/index.js

const Image = {
    install: function (app) {
        app.config.globalProperties.$img = function (img) {
            if (images[img]) {
                return images[img];
            } else {
                console.error(`Slika '${img}' nije pronađena u objektu slika.`);
                return '';
            }
        };
    }
};

export default Image;