import * as React from 'react';
import image1 from "../img/img1.jpg";
import image2 from "../img/img2.jpg";
import image3 from "../img/img3.jpg";

export default () => (
    <React.Fragment>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 ">
                <section>
                    <h2>Encabezado de la sección</h2>
                    <article>
                        <h3>Encabezado del artículo</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est
                            debitis,
                            magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                            quisquam quo eum aliquid. Repellat, atque.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est
                            debitis,
                            magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                            quisquam quo eum aliquid. Repellat, atque.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est debitis,
                            magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                            quisquam quo eum aliquid. Repellat, atque.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est debitis,
                            magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                            quisquam quo eum aliquid. Repellat, atque.
                        </p>
                    </article>
                </section>

            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 ">
                <aside>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Accusantium, nulla provident adipisci earum sapiente eos numquam, mollitia autem quo officiis
                        eius.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est debitis,
                        magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                        quisquam quo eum aliquid. Repellat, atque.
                    </p>
                </aside>
                <picture>
                    <source srcSet={image1} media="(max-width: 420px)" />
                    <source srcSet={image2} media="(max-width: 720px)" />
                    <img className="fluid-img" src={image3} alt="Foto" />
                </picture>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 ">
                <aside>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Accusantium, nulla provident adipisci earum sapiente eos numquam, mollitia autem quo officiis
                        eius.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est debitis,
                        magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                        quisquam quo eum aliquid. Repellat, atque.
                    </p>
                </aside>
                <picture>
                    <source srcSet={image1} media="(max-width: 420px)" />
                    <source srcSet={image2} media="(max-width: 720px)" />
                    <img className="fluid-img" src={image3} alt="Foto" />
                </picture>
            </div>

        </div>
    </React.Fragment>
)