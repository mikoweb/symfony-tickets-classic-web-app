import Behavior from '../Behavior.js';
import {RippleHandlers} from '@material/mwc-ripple/ripple-handlers.js';

export default class RippleBehavior extends Behavior {
    /**
     * @param {Ripple} ripple
     */
    constructor(ripple) {
        super(ripple);
        const rh = new RippleHandlers(async () => ripple);

        const parent = ripple.parentNode;
        parent.addEventListener('mouseenter', rh.startHover);
        parent.addEventListener('mouseleave', rh.endHover);
        parent.addEventListener('mousedown', (e) => {
            const onMouseUp = () => {
                window.removeEventListener('mouseup', onMouseUp);
                rh.endPress();
            };

            window.addEventListener('mouseup', onMouseUp);
            rh.startPress(e);
        });

        parent.addEventListener('touchstart', (e) => {
            const onTouchEnd = () => {
                window.removeEventListener('touchend', onTouchEnd);
                rh.endPress();
            };

            window.addEventListener('touchend', onTouchEnd);
            rh.startPress(e);
        });

        parent.addEventListener('focus', rh.startFocus);
        parent.addEventListener('blur', rh.endFocus);
    }
}
