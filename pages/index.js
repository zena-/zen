import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  if (typeof window !== "undefined") {
    let totopFunc = () => {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
    }

    let ballroll = document.querySelector('.element')
    document.querySelector('#element').addEventListener('click', function (e) 
    {
      e.preventDefault
      ballroll.classList.remove('roll')
      void ballroll.offsetWidth
      ballroll.classList.add('roll')
    },false)


    let x = document.querySelector('.grid-containers')
    document.querySelector('#skincare-tab').onclick = () => {
      if (x.style.display === "grid") {
        x.style.display = "none";
      } else {
        x.style.display = "grid";
      }
    }

    window.gsap?.registerPlugin(Draggable);
    function update() {
      let contain = document.querySelector('.play')
        window.Draggable?.create(".zero", {
            bounds: contain,
            edgeResistance: 0.65,
            type: "x,y",
            inertia: true,
            autoScroll: true
        })
    }
    update()

    var zen = window.gsap?.timeline({smoothChildTiming:true})
    if (zen) {
    zen.from('.draw', {opacity:0, duration:1, y:330, ease: "power4.out", delay: 0.3},'-=0.5')
        .from('.pradaWordsDiv', {opacity:0, duration: 2, ease: "bounce.out", y: -700 })
      }


    // const images = document.querySelectorAll('.anim')
    // observer = new IntersectionObserver((entries) => 
    // {

    //     entries.forEach(entry => 
    //     {
    //         if(entry.intersectionRatio > 0) entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`
    //         else  entry.target.style.animation = 'none'
    //     })

    // })
    // images.forEach(image => { observer.observe(image) })
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="container-fluid">
          <div className="split bac" >
          <section className="overview" id="overview">
            <div>
              <div id="pradaShoes">
                <div className="zenWalks draw" title="so aloof | walking illustration by me"></div>
              </div>
              <div>
                <p className="text-center topmargin described" id="described">I was described as aloof, I took it as&nbsp;a compliment</p>
              </div>
              <div className=" pradaWordsDiv">
                <div className="element roll" id="element">
                  <p className="push anim test-ceenter" data-delay=".1s">soAloof <span className="push2">(push)</span></p>
                </div>
              </div>
            </div>
          </section>
          </div>

          <article className="post">
            <section className="play blog">
              <div className="game card-object rotate">
                <header></header>
                <aside></aside>
                <main>
                  <blockquote className="message">The race is not to the <em className="forget">swift</em> or the battle to the <em className="forget">strong</em>, nor does food come to the <em className="forget">wise</em> or wealth to the <em className="forget">brilliant</em> or favor to the <em className="forget">learned</em>; but time and chance happen to them all</blockquote>
                </main>
                <footer className="author"><em className="forget"></em></footer>
              </div>
            </section>

            <section className="newYear blog">
                <div className="icon">
                  <span className="gameP text-right"> random buttons to click &#8623; </span>
                   <ul>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                          <div className="icon-box">
                            <i className="fas fa-icons"></i>
                          </div>
                        </label>
                      </li>
                      <li>
                        <label id="red">
                          <input type="checkbox" name="" />
                            <div className="icon-box">
                              <i className="far fa-building"></i>
                            </div>
                        </label>
                      </li>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                          <div className="icon-box">
                            <i className="fas fa-archway"></i>
                          </div>
                      </label>
                     </li>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                          <div className="icon-box">
                            <i className="fas fa-cannabis"></i>
                          </div>
                      </label>
                      </li>
                     <li>
                      <label id="red">
                        <input type="checkbox" name="" />
                          <div className="icon-box">
                            <i className="far fa-gem"></i>
                          </div>
                      </label>
                    </li>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                          <div className="icon-box">
                            <i className="fas fa-camera-retro"></i>
                          </div>
                      </label>
                    </li>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                        <div className="icon-box">
                          <i className="fas fa-apple-alt"></i>
                        </div></label></li>
                     <li>
                      <label id="red">
                        <input type="checkbox" name="" />
                        <div className="icon-box">
                          <i className="far fa-smile-beam"></i>
                        </div></label></li>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                        <div className="icon-box">
                          <i className="fas fa-fish"></i>
                        </div>
                      </label>
                     </li>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                        <div className="icon-box">
                          <i className="fas fa-water"></i>
                        </div>
                      </label>
                     </li>
                     <li>
                      <label 
                      id="red"><input type="checkbox" name="" />
                        <div className="icon-box">
                          <i className="far fa-lemon"></i>
                        </div>
                      </label>
                     </li>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                        <div className="icon-box">
                          <i className="fas fa-coffee"></i>
                        </div>
                      </label>
                     </li>
                     <li>
                      <label>
                        <input type="checkbox" name="" />
                        <div className="icon-box">
                          <i className="fas fa-mountain"></i>
                        </div>
                      </label>
                    </li>
                   </ul>
                </div>
            </section>


            <section className="wine blog">
              <div className="">
                <h2 className="wineP bac">still better than no&nbsp;wine</h2>
                <div className="col-md col-sm-12" id="zenWine">
                  <div className="zenWine anim" data-delay=".3s" title="so aloof | wine illustration by me"></div>
                </div>
              </div> 
            </section>

            <section className="late blog">
              <p className="text-center sor">&#34;sorry I'm late, I didn't really want to&nbsp;come&#34;</p>
              <div className="row text-center">
                <div className="col-md col-sm-12" id="zenDou">
                  <div className="zenDou" title="so aloof | insta illustration by me"></div>
                </div>
                <div className="col-md col-sm-12">
                  <div className="phone">
                    <div className="wind">
                      <div className="zenDou" title="so aloof | insta illustration by me"></div>
                    </div>
                    <ul>
                      <li className="deep">&#127819;</li>
                      <li className="deep">&#129426;</li>
                      <li className="deep">&#129346;</li>
                    </ul>
                    <ul>
                      <li className="deep">&#127790;</li>
                      <li className="deep">&#128757;</li>
                      <li className="deep">&#127796;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="blog pinkLine">
              <p className="text-center sometimes" id="pinkLineP">&#34;as for me, I'm trying to stay timeless in the era of constant&nbsp;change&#34;</p>
                <div className="col-md text-center">
                  <div className="nb" id="zenNB">
                    <div className="zenNB anim" data-delay=".1s" title="so aloof | new balance illustration by me">
                      {/*<img src="/drawingNB.png" />*/}
                    </div>
                  </div>
                   <p className="padd">Btw, I love the first few looks from the Aimé Leon&nbsp;Dore <br/> and New Balance up-coming project.</p>
                   
                   <div className="text-center hearts" id="pills-tab" role="tablist">
                    <div className="nav-item heart mx-auto">
                      <a className="nav-link deep" id="skincare-tab" data-toggle="pill" href="#skincare" role="tab" aria-controls="skincare" aria-selected="false">
                        <span className="heartBtn">i'm a button</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-containers tab-content mx-auto" id="pills-tabContent">
                  <div className="tab-pane fade" id="skincare" role="tabpanel" aria-labelledby="skincare-tab">
                    <div className="grid-img-item item border">
                      <div className="orange"></div>
                      <div className="zenYear margintop35 skinImg anim" data-delay=".5s" title="so aloof | 2022 illustration by me"></div>
                    </div>
                    <div className="grid-item item border">
                        <h2 className="boxes text-center">Kypris</h2>
                        <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B01LWQMXG7/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01LWQMXG7&linkCode=as2&tag=zena09-20&linkId=8ae480a1de620d996d93bf40c45dcc88">
                          <img className="anim" data-delay=".1s" alt="Kypris So Aloof natural | illustration by me" src="/kypris.jpg"/>
                        </a>
                    </div>
                    <div className="grid-img-item item border">
                      <div className="zenNB skinImg margintop35 anim" data-delay=".1s" title="so aloof | new balance illustration by me"></div>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">Herbivore Botanicals</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B07Q7YS8SY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07Q7YS8SY&linkCode=as2&tag=zena09-20&linkId=5a8ef751f6f6d1e2794420edb5bb352a">
                        <img className="margintop35 anim" data-delay=".1s" alt="Herbivore Botanicals So Aloof natural | illustration by me" src="/drawHerb.jpg"/>
                      </a>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">Dr. Bronner's</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B001ET725W/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001ET725W&linkCode=as2&tag=zena09-20&linkId=04ab5ac72eb25088bd6b5b5dfd8b7da7">
                        <img className="anim" data-delay=".1s" src="/drawDrB.jpg" alt="Dr. Bronner's So Aloof natural | illustration by me" />
                      </a>
                    </div>
                    <div className="grid-img-item item border">
                      <div className="skinImg zenWalks margintop35 anim" data-delay=".2s" title="so aloof | walking illustration by me"></div>
                    </div>
                    <div className="grid-item item border" id="zenNoto">
                        <h2 className="boxes text-center">NOTO Botanics</h2>
                        <a target="_blank" rel="nofollow" className="" href="https://www.amazon.com/gp/product/B07FJLZTYW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07FJLZTYW&linkCode=as2&tag=zena09-20&linkId=8f352530c302a24b325ca6112a24b31e">
                          <img className="anim" data-delay=".2s" id="noto" alt="NOTO So Aloof natural | illustration by me" src="/noto.jpg"/>
                        </a>
                    </div>
                    <div className="grid-item item border">
                        <h2 className="boxes text-center">Aradé Beauty</h2>
                        <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B00VFFEAT6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00VFFEAT6&linkCode=as2&tag=zena09-20&linkId=35ee06a8e2b63564562d886e6c0821a6">
                          <img className="anim" data-delay=".2s" alt="Arade So Aloof natural | illustration by me" src="/drawArade.jpg"/>
                        </a>
                    </div>
                    <div className="grid-img-item item border">
                      <div className="skinImg zenAlicha margintop35 anim" data-delay=".2s" title="so aloof | illustration by me"></div>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">Rosehip oil</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B01LM282RW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01LM282RW&linkCode=as2&tag=zena09-20&linkId=9741b547006ca82c29b4f65414615af9">
                        <img className="anim" data-delay=".3s" alt="Rosehip oil So Aloof natural | illustration by me" src="/drawRose.jpg"/>
                      </a>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">LAPCOS</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B07J4X9C51/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J4X9C51&linkCode=as2&tag=zena09-20&linkId=9503a24b4880e2135f9663fcc30e2d0a">
                        <img className="margintop35 anim" data-delay=".3s" src="/lapcos.jpg" />
                      </a>
                    </div>
                    <div className="grid-img-item item border">
                      <div className="skinImg zenSweater margintop35 anim" data-delay=".3s" title="so aloof | illustration by me"></div>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">iHeart Nature</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B07JF7YBZK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07JF7YBZK&linkCode=as2&tag=zena09-20&linkId=12e90add98aceea4ac9e07d6cabc56d9">
                        <img className="anim" data-delay=".3s" src="/iheart.jpg" />
                      </a>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">Pure Biology</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B07P7Y5BGF/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07P7Y5BGF&linkCode=as2&tag=zena09-20&linkId=b34361134793173ee66bfebfcb15db88">
                        <img className="anim" data-delay=".4s" src="/pureB.jpg" />
                      </a>
                    </div>
                    <div className="grid-img-item item border">
                      <div className="skinImg zenSlip margintop35 anim" data-delay=".4s" title="so aloof | illustration by me"></div>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">Rael</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B0773HT3FT/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0773HT3FT&linkCode=as2&tag=zena09-20&linkId=b785ed89a399369fd1e2efdbe76f402c">
                        <img className="anim" data-delay=".4s" src="/rael.jpg" />
                      </a>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">Ballon Blanc</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B07Q4NPX1C/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07Q4NPX1C&linkCode=as2&tag=zena09-20&linkId=c016e16ae499abd2d00de7bba3a388a6">
                        <img className="anim" data-delay=".4s" id="ballon" src="/ballon.jpg" />
                      </a>
                    </div>
                    <div className="grid-item item border">
                      <h2 className="boxes text-center">Andalou Naturals</h2>
                      <a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B00854KDYQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00854KDYQ&linkCode=as2&tag=zena09-20&linkId=f59ea620bc4d544e507dbece038b1ef3">
                        <img className="anim" data-delay=".5s" src="/andalou.jpg" />
                      </a>
                    </div>
                </div>
              </div>
            </section>

            <section className="">
              <div className=" text-center">
                <div className="blog" id="zenWalks">
                  <p className="text-center" id="sometimes">&#34;sometimes I walk like no one is watching, those days are my best&nbsp;days&#34;</p>
                  <div className="pradaShoes blog anim" data-delay=".2s" title="so aloof Bohemian Art | illustration by me"></div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="row">
          <div className="col foot"><button className="deep" onClick={() => totopFunc()} id="myBtn" title="top of so aloof natural">back to top</button></div>
          <div className="col foot">designed, built, and art by me zen</div>
          <div className="col foot instaDiv">
            <a className="pad text-right deep" href="mailto:e.nosazena@gmail.com">say&nbsp;hi</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
