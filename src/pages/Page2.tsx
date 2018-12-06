import * as React from 'react';
import image1 from "../img/img1.jpg";
import image2 from "../img/img2.jpg";
import image3 from "../img/img3.jpg";

export default () => (
    <React.Fragment>

        <div className="row">
            <div className="col-xs-12 col-md-8 col-lg-10 ">
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est
                            debitis,
                            magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                            quisquam quo eum aliquid. Repellat, atque.
                        </p>
                    </article>
                    <picture>
                        <source srcSet={image1} media="(max-width: 420px)"/>
                        <source srcSet={image2} media="(max-width: 720px)"/>
                        <img className="fluid-img" src={image3} alt="Foto"/>
                    </picture>
                </section>

            </div>

            <div className="col-xs-12 col-md-4 col-lg-2 ">
                <aside>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est
                        debitis,
                        magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                        quisquam quo eum aliquid. Repellat, atque.
                    </p>
                </aside>

            </div>
        </div>


    </React.Fragment>
)