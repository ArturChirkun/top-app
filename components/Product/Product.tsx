import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/card";
import { Rating } from "../Rating/rating";
import { TagDiv } from "../Tag/tag";
import { Button } from "../button/button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

export const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);

      const variants = {
        visible: {
          opacity: 1,
          height: "auto",
        },
        hidden: { opacity: 0, height: 0 },
      };

      const scrollToReview = () => {
        setIsReviewOpened(true);
        console.log(reviewRef);
        reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <img
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                alt={product.title}
                width={70}
                height={70}
              />
            </div>

            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              {product?.price && priceRu(product.price)}
              {product.oldPrice && (
                <TagDiv className={styles.oldPrice} color="green">
                  { product.price  && priceRu(product.price - product.oldPrice)}
                </TagDiv>
              )}
            </div>
            <div className={styles.credit}>
              {product?.credit && priceRu(product.credit)}/
              <span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((c) => (
                <TagDiv key={c} className={styles.category} color="ghost">
                  {c}{" "}
                </TagDiv>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.ratingTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {" "}
                {product.reviewCount}{" "}
                {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
              </a>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.features}>
              {" "}
              {product.characteristics.map((c) => (
                <div key={c.name} className={styles.characteristics}>
                  <span className={styles.characteristicsName}> {c.name} </span>
                  <span className={styles.characteristicsDots}></span>
                  <span className={styles.characteristicsValue}>
                    {" "}
                    {c.value}{" "}
                  </span>
                </div>
              ))}{" "}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>Преимущества</div>
                  <div>{product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div>недостатки</div>
                  <div>{product.disadvantages}</div>
                </div>
              )}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
              <Button appearence="primary"> Узнать подробнее </Button>
              <Button
                appearence="ghost"
                arrow={isReviewOpened ? "down" : "right"}
                className={styles.reviewButton}
                onClick={() => setIsReviewOpened(!isReviewOpened)}
              >
                {" "}
                Читать отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            animate={isReviewOpened ? "visible" : "hidden"}
            variants={variants}
            initial="hidden"
          >
            <Card color="blue" className={cn(styles.reviews)} ref={reviewRef}>
              {product.reviews.map((r) => (
                <div key={r._id}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm productId={product._id} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);
