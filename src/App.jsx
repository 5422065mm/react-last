import React, { useState } from "react";

export default function App() {
  const Simages = [
    { src: "images/tigers.jpg", alt: "阪神タイガース" },
    { src: "images/carp.jpg", alt: "広島東洋カープ" },
    { src: "images/baystars.jpg", alt: "横浜DeNAベイスターズ" },
    { src: "images/giants.jpg", alt: "読売ジャイアンツ" },
    { src: "images/swallows.jpg", alt: "東京ヤクルトスワローズ" },
    { src: "images/dragons.jpg", alt: "中日ドラゴンズ" }
  ];

  const Pimages = [
    { src: "images/buffaloes.jpg", alt: "オリックス・バッファローズ" },
    { src: "images/marines.jpg", alt: "千葉ロッテマリーンズ" },
    { src: "images/hawks.jpg", alt: "福岡ソフトバンクホークス" },
    { src: "images/eagles.jpg", alt: "東北楽天ゴールデンイーグルス" },
    { src: "images/lions.jpg", alt: "埼玉西武ライオンズ" },
    { src: "images/fighters.jpg", alt: "日本ハムファイターズ" }
  ];

  const [league, setLeague] = useState("セ・リーグ");
  const [displayedSimg, setDisplayedSimg] = useState(Simages[0]);
  const [displayedPimg, setDisplayedPimg] = useState(Pimages[0]);
  const [SteamName, setSTeam] = useState(Simages[0].alt);
  const [PteamName, setPTeam] = useState(Pimages[0].alt);
  const ShandleThumbnailClick = (image) => {
    setDisplayedSimg(image);
    setSTeam(image.alt);
  };

  const PhandleThumbnailClick = (image) => {
    setDisplayedPimg(image);
    setPTeam(image.alt);
  };


  function changeLeague(event) {
    setLeague(event.target.value);
  }

  return (
    <>
      <h1>Introduce The BaseBall Teams</h1>
      <div className="selectLeague">
        <label htmlFor="セ・リーグ">セ・リーグ</label>
        <input onChange={changeLeague} type="radio" value="セ・リーグ" checked={league === "セ・リーグ"} />
        <label htmlFor="パ・リーグ">パ・リーグ</label>
        <input onChange={changeLeague} type="radio" value="パ・リーグ" checked={league === "パ・リーグ"} />
      </div>
      <h2>＜球団ロゴ＞</h2>

      {league == "セ・リーグ" && (
        <>
          <div className="full-img">
            <img
              className="displayed-img"
              src={displayedSimg.src}
              alt={displayedSimg.alt}
            />

            <h2>＜チーム名＞</h2>
            <h1 className="displaySTeamName">{displayedSimg.alt}</h1>


            {SteamName == "阪神タイガース" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/hanshintigers_official/">{SteamName}</a>
              </li>
            )}

            {SteamName == "広島東洋カープ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/carp_official_/">{SteamName}</a>
              </li>
            )}

            {SteamName == "横浜DeNAベイスターズ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/baystars_official/">{SteamName}</a>
              </li>
            )}

            {SteamName == "読売ジャイアンツ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/yomiuri.giants/">{SteamName}</a>
              </li>
            )}

            {SteamName == "東京ヤクルトスワローズ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/goods_yakultswallows/">{SteamName}</a>
              </li>
            )}

            {SteamName == "中日ドラゴンズ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/chunichidragonsofficial/">{SteamName}</a>
              </li>
            )}

            <div className="site">
              <p>製作者：村松南斗</p>
              <p>学籍番号：5422065</p>
              <p>画像の引用元（球団ロゴ）</p>
            
            
              <p><a href="https://npb.jp/pl/">パ・リーグ公式サイト</a></p>


              <p><a href="https://npb.jp/cl/">セ・リーグ公式サイト</a></p>


            </div>
          </div>




          <div className="thumb-bar">
            {Simages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="thumbnail"
                onClick={() => ShandleThumbnailClick(image)}
              />
            ))}
          </div>
        </>
      )}


      {league != "セ・リーグ" && (
        <>
          <div className="full-img">
            <img
              className="displayed-img"
              src={displayedPimg.src}
              alt={displayedPimg.alt}
            />

            <h2>＜チーム名＞</h2>
            <h1 className="displayPTeamName">{displayedPimg.alt}</h1>

            {PteamName == "オリックス・バッファローズ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/orix_buffaloes/">{PteamName}</a>
              </li>
            )}

            {PteamName == "千葉ロッテマリーンズ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/chibalotte/">{PteamName}</a>
              </li>
            )}

            {PteamName == "福岡ソフトバンクホークス" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/softbankhawks_official/">{PteamName}</a>
              </li>
            )}

            {PteamName == "東北楽天ゴールデンイーグルス" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/rakuten_eagles/">{PteamName}</a>
              </li>
            )}

            {PteamName == "埼玉西武ライオンズ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/saitama_seibu_lions_official/">{PteamName}</a>
              </li>
            )}

            {PteamName == "日本ハムファイターズ" && (
              <li>
                球団のofficial instagram : {" "}
                <a href="https://www.instagram.com/fighters_official/">{PteamName}</a>
              </li>
            )}





            <div className="site">
              <p>製作者：村松南斗</p>
              <p>学籍番号：5422065</p>
              <p>画像の引用元（球団ロゴ）</p>


              <p><a href="https://npb.jp/pl/">パ・リーグ公式サイト</a></p>


              <p><a href="https://npb.jp/cl/">セ・リーグ公式サイト</a></p>

            </div>

          </div>

          <div className="thumb-bar">
            {Pimages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="thumbnail"
                onClick={() => PhandleThumbnailClick(image)}
              />
            ))}
          </div>


        </>
      )}

    </>
  );
}



