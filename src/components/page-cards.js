import React from "react"
import PageCardStyles from "./styles/page-card.module.css"


const PageCard = () =>(
    <section className={PageCardStyles.wrapper}>
        <div className={`${PageCardStyles.card} ${PageCardStyles.left}`}>
            <div className={PageCardStyles.cardSection}>
                <h2>About</h2>
            </div>
            <div className={PageCardStyles.cardSection}>
                <p>Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.</p>
            </div>
        </div>
        <div className={`${PageCardStyles.card} ${PageCardStyles.right}`}>
            <div className={PageCardStyles.cardSection}>
                <h2>Projects</h2>
            </div>
            <div className={PageCardStyles.cardSection}>
                <p>Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.</p>
            </div>
        </div>
    </section>
)

export default PageCard