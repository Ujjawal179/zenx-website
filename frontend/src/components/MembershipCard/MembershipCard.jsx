import React from "react";
import styles from "./MembershipCard.module.css";
function MembershipCard({color = 1}) {
    return (
        <>
            <div className={styles.card} style={{backgroundColor: color === 0 ? `var(--history)` : undefined}}>
                <div className={styles.upper}>
                    <h1 className="head m-0">Membership</h1>
                    <p>Name of D. GYM</p>
                </div>
                <div className={styles.lower}>
                    <div className={styles.price}>
                        <h3>$100</h3>
                    </div>
                    <div className={styles.date}>
                        <p className="m-0">Valid Upto</p>
                        <h4>23/12/2034</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MembershipCard;
