import classNames from "classnames/bind";
import styles from './ProductSingle.module.scss'
import Image from "next/image";
import logo from '../../../../assets/images/user01.jpg'

const cx = classNames.bind(styles)


function SingleProductPage() {
    return (
        <div className={cx("container")}>
            <div className={cx("inforContainer")}>
                <div className={cx("imgContainer")}>
                    <Image src={logo} alt="" fill />
                </div>
                Nguyễn Văn Huy
            </div>
            <div className={cx("formContainer")}>
                <form action="" className={cx("form")}>
                    <input type="hidden" name="id" value="" />
                    <label>Title</label>
                    <input type="text" name="title" placeholder="" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="" />
                    <label>Stock</label>
                    <input type="number" name="stock" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="" />
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder="" />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen" selected="kitchen">Kitchen</option>
                        <option value="computers" selected="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>);
}

export default SingleProductPage;