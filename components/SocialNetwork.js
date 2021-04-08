import React, { Component } from 'react'

export default class SocialNetwork extends Component {
    render() {
        return (
            <section id="socialNetwork" className="socialNetwork">
                <div className="container">
                    <h2 className="text-center text-white p-10">Les Nouvelles de La Luck</h2>

                    <div className="md:flex justify-around items-center  lg:py-8">
                        <div className="p-2">
                            <iframe  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLaLuckLille&tabs=timeline&width=320&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="400" styles="border:none;overflow:hidden" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>

                        <div className="p-2">
                            <iframe  src="http://instagram.com/p/CMJ5FoyA_Ne/embed/captioned" width="100%" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
