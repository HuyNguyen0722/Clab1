import classNames from "classnames/bind";
import styles from './Rightbar.module.scss';
import Image from "next/image";
import astronaut from '../../../assets/images/astronaut.png'
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const cx = classNames.bind(styles)
function Rightbar() {
    return (
        <div className={cx("container")}>
            <div className={cx("item")}>
                <div className={cx("bgContainer")}>
                    <Image className={cx("bg")} src={astronaut} alt="" fill />
                </div>
                <div className={cx("text")}>
                    <span className={cx("notification")}>🔥 Available Now</span>
                    <h3 className={cx("title")}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={cx("subtitle")}>Takes 4 minutes to learn</span>
                    <p className={cx("desc")}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={cx("button")}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={cx("item")}>
                <div className={cx("text")}>
                    <span className={cx("notification")}>🚀 Coming Soon</span>
                    <h3 className={cx("title")}>
                        New server actions are available, partial pre-rendering is coming
                        up!
                    </h3>
                    <span className={cx("subtitle")}>Boost your productivity</span>
                    <p className={cx("desc")}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={cx("button")}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;