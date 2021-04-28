import React from "react";
import './Portfolio.css';

const portfolio: Array<{ "title": string, shortTitle?: string, "category": string, "url": string, "image": string, "imgFit"?: string, "description": string }> = [
    {
        "title": "Krisensentiment - Wie Sie Stimmungen in Sozialen Medien Erkennen",
        "shortTitle": "Das Krisensentiment",
        "category": "Blog",
        "url": "https://blog.viadee.de/sentiment-analyse-yammer",
        "image": "/images/sentiment.png",
        "description": "Gestalten Sie Teile Ihrer Unternehmenskommunikation in sozialen Medien, dann kommen Sie um eine Auswertung der entstehenden Kommentare nicht herum. Ein nützliches Tool hierfür ist die Sentimentanalyse, mittels welcher sich die Stimmung oder die Gefühlslage aus Texten extrahieren lässt. Somit erfahren Sie, wie die aktuelle Kampagne die Außenwirkung Ihres Unternehmens beeinflusst, und können reagieren, wenn die Stimmung kippt. Am realen Beispiel des viadee Yammer-Netzwerkes behandelt der Artikel das grundsätzliche Vorgehen einer semantischen Sentimentanalyse von Texten."
    },
    {
        "title": "Machine Learning in der Logistikbranche: Wegbereiter in eine optimierte Zukunft",
        "shortTitle": "ML in der Logistikbranche",
        "category": "Blog",
        "url": "https://blog.viadee.de/machine-learning-in-der-logistikbranche",
        "image": "/images/ml-logistics.jpg",
        "description": "Als marktführender IT-Dienstleister für alle am Transportprozess beteiligten Parteien positioniert sich TIMOCOM als Partner der Kunden, mit dem Ziel, Prozesse zu verschlanken, zu vernetzen und zu digitalisieren. Die Erfolgsgeschichte des Unternehmens reicht dabei viele Jahre zurück bis zur Firmengründung der „TimoCom Soft- und Hardware GmbH“ im Jahr 1997. Damals erkannte Jens Thiermann, einer der beiden namensgebenden Firmengründer, dass das Auffinden von Ladungen und die Auslastung von LKW eine große Herausforderung darstellen. Die Lösung wurde in der Entwicklung einer digitalen Fracht- und Laderaumbörse gefunden und umgesetzt, über die Rückladungen gesucht und Leerfahrten verringert werden konnten. Mittlerweile unter TIMOCOM GmbH firmierend, ist daraus ein Smart Logistics System mit weiteren Anwendungen, sog. Smart Apps, z. B. zur digitalen Auftragsabwicklung und GPS Tracking, gewachsen. Mit diesem System unterstützt TIMOCOM mehr als 43.000 Unternehmen aus ganz Europa täglich bei der Bewältigung komplexer Prozesse der Transportlogistik."
    },
    {
        "title": "Machine Learning Modelle Erklärbar Machen mit Anchors",
        "shortTitle": "XAI & Anchors",
        "category": "Blog",
        "url": "https://blog.viadee.de/machine-learning-modelle-erklaerbar-machen-mit-anchors",
        "image": "/images/anchors.jpg",
        "description": "Sowohl bei der Entwicklung als auch bei der Verwendung von Machine-Learning-Modellen steht man vor mehreren Herausforderungen: Die Modelle müssen validiert und Vertrauen muss geschaffen werden. Sofern es außerdem um automatisierte Entscheidungen geht, müssen einzelne Vorhersagen bzw. Entscheidungen erklärt werden. Dazu haben Marco Tulio Ribeiro, Sameer Singh und Carlos Guestrin in 2018 den Algorithmus Anchors entworfen."
    },
    {
        "title": "Cloud Native KI: MLOps Mithilfe der Kubeflow Plattform",
        "shortTitle": "Cloud Native KI mit Kubeflow",
        "category": "Talk",
        "url": "https://www.youtube.com/watch?v=PRYA2RPFlSw",
        "image": "/images/kubeflow-logo.png",
        "description": "Dieser Talk beleuchtet typische Probleme und Ansprüche, die Machine Learning Projekten vor ihrem Release bevorstehen. Zudem wird gezeigt, wie MLOps-Techniken und Methoden helfen können den Ansprüchen gerecht zu werden. Hierfür wird insbesondere Googles Cloud-Native ML Plattform „Kubeflow“ vorgestellt. Diese hat keinen geringeren Anspruch, als den gesamten ML-Projektlebenszyklus durch skalierbare Workflows zu begleiten, Modell-Deployments zu vereinfachen und somit den professionellen Betrieb von KI-Projekten zu ermöglichen."
    },
    {
        "title": "Explainable AI or Halting Faulty Models ahead of Disaster",
        "shortTitle": "Halting Faulty Models ahead of Disaster",
        "category": "Blog",
        "url": "https://www.kdnuggets.com/2019/03/explainable-ai.html",
        "image": "/images/kdnuggest-post.jpg",
        "description": "A brief overview of a new method for explainable AI (XAI), called anchors, introduce its open-source implementation and show how to use it to explain models predicting the survival of Titanic passengers."
    },
    {
        "title": "Interpretable Machine Learning Book: Scoped Rules (Anchors)",
        "shortTitle": "Scoped Rules (Anchors)",
        "category": "Gastbeitrag",
        "url": "https://christophm.github.io/interpretable-ml-book/anchors.html",
        "image": "/images/lime-anchors.png",
        "description": ""
    },
    {
        "title": "Equipping Titanic with Anchors: Halting Faulty Models ahead of Disaster",
        "shortTitle": "Explainable AI goes Titanic",
        "category": "Blog",
        "url": "https://www.kaggle.com/c/titanic/discussion/83178",
        "image": "/images/kaggle.png",
        "imgFit": "scale-down",
        "description": ""
    },
    {
        "title": "Hanseatic Governance: Understanding Blockchain as Organizational Technology",
        "shortTitle": "Hanseatic Governance",
        "category": "Publikation",
        "url": "https://www.wi.uni-muenster.de/research/publications/154505",
        "image": "/images/researchgate.svg",
        "imgFit": "scale-down",
        "description": "Blockchain technology provides a distributed ledger and is based on a logic of peer to peer authentication. It gained prominence with the rise of cryptocurrencies but provides a much broader field of possible applications. While it has been originally closely linked to a libertarian agenda rejecting organizations, its developments have illustrated that this ideological framing is being reversed in practice. Based on contrastive empirical cases, the purpose of our paper is to discuss blockchain as an organizational technology. Its peculiar mode of governance, which we name ‘Hanseatic', needs to mediate between the fluidity typical of Free and Open Source Software development and the immutability that use organizations adopt blockchain for."
    },
    {
        "title": "CryptoWidget",
        "category": "Anwendung",
        "url": "https://apps.samsung.com/gear/appDetail.as?appId=bQbt5RMMyb",
        "image": "/images/cryptowidget.png",
        "imgFit": "contain",
        "description": "CryptoWidget is the first Gear app to provide you with real-time information and charts about your favourite cryptocurrency directly on your watch."
    },
    {
        "title": "StockWidget",
        "category": "Anwendung",
        "url": "https://apps.samsung.com/gear/appDetail.as?appId=EyslxRoanH",
        "image": "/images/stockwidget.png",
        "imgFit": "contain",
        "description": "StockWidget is the first gear app that provides you with real-time stock quotes and charts of your favorite stocks directly on your watch."
    },
    {
        "title": "Trace Clustering for an Online Freight Exchange at TIMOCOM",
        "shortTitle": "Trace Clustering @ TIMOCOM",
        "category": "Publikation",
        "url": "https://congreso.us.es/bpm2020/images/industryforum.pdf",
        "image": "/images/bpm2020.png",
        "imgFit": "contain",
        "description": "To guarantee a high level of customer satisfaction, providers of highly frequented platforms strive to continuously improve their application design. One promising potential to discover issues regarding the application design and at the same time consider the heterogeneity of different users lies in the clustering of traces and the examination of the corresponding process models. In order to leverage this potential, this study investigates how large-scale event logs can be preprocessed and clustered in order to enable cluster-specific application design by examining an event log of an online freight exchange. Using the Action Design Research approach, which allows a joint shaping of a solution with practitioners, a pipeline is developed, which enables the preprocessing of large-scale event logs and the execution of three trace clustering approaches. The investigation of the resulting clusters in the form of process models delivers valuable insights into customer behavior, helps to identify weaknesses and improvement possibilities of the platform and thereby provides a basis to support application design."
    }
]

const Portfolio = () => {

    return (
        <section id="portfolio">
            <div>
                <h3>Projekte und Links</h3>
            </div>

            <ul className="works-list">
                {portfolio.map((projects, index) => {
                    const modalId = "modal-" + index;
                    return (
                        <li key={"works-list-item-" + index} className="item-wrap works-list-item">
                            <a href={"#" + modalId} className="works-list-link">

                                <img className="works-item-pic" src={projects.image} alt=""
                                     style={{objectFit: (projects.imgFit as any || "cover")}}/>

                                <div className="works-item-text-container">
                                    <i className="fa fa-expand expand-icon" />
                                    <div className="works-item-category">{projects.category}</div>

                                    <div className="works-item-title">{projects.shortTitle || projects.title}</div>

                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>

            {portfolio.map((projects, index) => {
                return (
                    <div key={"modal-popup-" + index} id={"modal-" + index} className="popup-modal slider mfp-hide">
                        <div className="media">
                            <img src={projects.image} alt=""
                                 style={{
                                     width: "100%",
                                     minWidth: "100%",
                                     maxHeight: "300px",
                                     objectFit: "scale-down"
                                 }}/>
                        </div>
                        <div className="description-box">
                            <h4>{projects.title}</h4>
                            <p>{projects.description}</p>
                        </div>
                        <div className="link-box">
                            <a target="_blank" rel="noreferrer" href={projects.url}>Details</a>
                            <a href="/#" className="popup-modal-dismiss">Schließen</a>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default Portfolio;