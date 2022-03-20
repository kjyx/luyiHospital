<template>
  <div class="overview-wrap">
    <div class="container">
      <div class="ov-baner-wrap" style="margin-top: 30px">
        <img class="img-block" src="@/assets/images/gaikuang.jpg" alt="">
        <div class="ov-ban-tabs wow fadeInUp">
          <ul class="link-tabs-list alt-survey clearfix">
            <li class="item fl " @click="$router.push({path:'/hospitalProfile'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-1"></div>
                  <p class="text">医院简介</p>
                </div>
              </a>
            </li>
            <li class="item fl  active ">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-2"></div>
                  <p class="text">荣誉历程</p>
                </div>
              </a>
            </li>
            <li class="item fl " @click="$router.push({path:'/Statement'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-3"></div>
                  <p class="text">院长致辞</p>
                </div>
              </a>
            </li>
          </ul>            </div>
      </div>
      <div class="history-content-wrap">
        <div class="history-content--desc wow fadeInUp">
          <p>
            我院于2007年投资兴建，2017年晋升为“国家二级综合医院”，2018年申办了“医养结合”型疗养院，是集医疗、护理、体检、康复、养老为一体，是城乡居民医保定点医院、省内外即时结报定点医院，低保、贫困户一站式结算单位。疗养楼内开放200张疗养床位----鹿邑县福寿康疗养院，内设中央空调，独立卫生间，网络电视、席梦思床垫、床头呼叫、消防喷淋、烟雾报警、24小时纯净冷热水，星级宾馆式装修，让老人住着舒心。
          </p>
        </div>
      </div>
    </div>
    <div class="history-content1">
      <div class="container">
        <div class="history-fzlc-header">
          <p class="text1">鹿邑心脑血管荣誉历程</p>
        </div>
        <div class="history-fzlc-wrap">
          <div class="history-fzlc-wrap--line"></div>

          <div class="history-fzlc-item clearfix even">
            <div class="point"></div>
            <div class="fzlc-item-text">
              <div class="item-text-top clearfix">
                <div class="item-text-top--tips">
                  <span>03</span>
                </div>
                <div class="item-text-top--text">
                  <p class="text1">2017/03月</p>
                  <p class="text2">医养结合</p>
                </div>
              </div>
              <div class="item-text-content">
                <p>
                  老人家,你愿意住养老院吗?年轻人,你会送父母到养老院吗?老人的生活质量开始成为许多家庭关注的问题。年轻人在顾及生存与发展的同时往往难以兼顾家中老人。
                </p>
              </div>
            </div>
            <div class="fzlc-item-img">
              <div class="fzlc-item-img--box clearfix">
                <div class="fzlc-item-img--box_item">
                  <div class="box_item--wrap">
                    <div class="box_item--wrap_img">
                      <img src="./images/jiehe1.jpg" alt="">
                    </div>
                    <p class="box_item--wrap_text">
                      医养结合，兼顾家中老人
                    </p>
                  </div>
                </div>
                <div class="fzlc-item-img--box_item">
                  <div class="box_item--wrap">
                    <div class="box_item--wrap_img" style="height: 166.88px;">
                      <img src="./images/jiehe2.png" alt="" style="height: 100%;">
                    </div>
                    <p class="box_item--wrap_text">
                      医养结合，兼顾家中老人
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="history-fzlc-item clearfix odd">
            <div class="point"></div>
            <div class="fzlc-item-text">
              <div class="item-text-top clearfix">
                <div class="item-text-top--tips">
                  <span>02</span>
                </div>
                <div class="item-text-top--text">
                  <p class="text1">2017/04月</p>
                  <p class="text2">爱心捐助贫困病人</p>
                </div>
              </div>
              <div class="item-text-content">
                <p>
                  2017年4月10日上午，医院领导亲手将爱心捐款交到田文祥老人家属的手中，仔细询问了病情及现在的治疗情况，并鼓励他早日战胜病魔，恢复健康！
                </p>
              </div>
            </div>
            <div class="fzlc-item-img">
              <div class="fzlc-item-img--box clearfix">
                <div class="fzlc-item-img--box_item">
                  <div class="box_item--wrap">
                    <div class="box_item--wrap_img">
                      <img src="./images/juanzhu.jpg" alt="">
                    </div>
                    <p class="box_item--wrap_text">
                      田振丰院长带领全院职工进行爱心捐助
                    </p>
                  </div>
                </div>
                <div class="fzlc-item-img--box_item">
                  <div class="box_item--wrap">
                    <div class="box_item--wrap_img">
                      <img src="./images/juanzhu2.jpg" alt="">
                    </div>
                    <p class="box_item--wrap_text">
                      全院职工进行募捐
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="history-fzlc-item clearfix even">
            <div class="point"></div>
            <div class="fzlc-item-text">
              <div class="item-text-top clearfix">
                <div class="item-text-top--tips">
                  <span>04</span>
                </div>
                <div class="item-text-top--text">
                  <p class="text1">2017/10月</p>
                  <p class="text2">尊老爱老 鹿邑心脑血管医院重阳节爱心公益行</p>
                </div>
              </div>
              <div class="item-text-content">
                <p>
                  为弘扬中华民族传统美德，倡导尊老爱老敬老的社会风尚，2017年9月9日重阳节之日，鹿邑心脑血管医院院长田振丰带领医院领导班子，到杨湖口镇敬老院举行“尊老爱老 鹿邑心脑血管医院
                </p>
              </div>
            </div>
            <div class="fzlc-item-img">
              <div class="fzlc-item-img--box clearfix">
                <div class="fzlc-item-img--box_item">
                  <div class="box_item--wrap">
                    <div class="box_item--wrap_img">
                      <img src="./images/aixingongyi.jpg" alt="">
                    </div>
                    <p class="box_item--wrap_text">
                      尊老爱老 鹿邑心脑血管医院重阳节爱心公益行
                    </p>
                  </div>
                </div>
                <div class="fzlc-item-img--box_item">
                  <div class="box_item--wrap">
                    <div class="box_item--wrap_img">
                      <img src="./images/aixingongyi2.jpg" alt="">
                    </div>
                    <p class="box_item--wrap_text">
                      尊老爱老 鹿邑心脑血管医院重阳节爱心公益行
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="history-fzlc-item clearfix odd">
            <div class="point"></div>
            <div class="fzlc-item-text">
              <div class="item-text-top clearfix">
                <div class="item-text-top--tips">
                  <span>05</span>
                </div>
                <div class="item-text-top--text">
                  <p class="text1">2017年11月4日</p>
                  <p class="text2">鹿邑心脑血管医院晋升国家二级医院</p>
                </div>
              </div>
              <div class="item-text-content">
                <p>
                  在2017年11月4日经县、市领导、专家进行国家二级医院各项指标逐一验收，成功通过晋级为国家二级医院。
                  现已开通省内、外即时结报，全国患者在我院住院治疗均可报销。低保户、贫困户、五保户凭证件在我院享受二次民政报销。
                </p>
              </div>
            </div>
            <div class="fzlc-item-img">
              <div class="fzlc-item-img--box clearfix">
                <div class="fzlc-item-img--box_item">
                  <div class="box_item--wrap">
                    <div class="box_item--wrap_img">
                      <img src="./images/yiyuan.jpg" alt="">
                    </div>
                    <p class="box_item--wrap_text">
                      鹿邑心脑血管医院晋升国家二级医院
                    </p>
                  </div>
                </div>
                <div class="fzlc-item-img--box_item">
                  <div class="box_item--wrap">
                    <div class="box_item--wrap_img">
                      <img src="./images/yiyuan1.jpg" alt="">
                    </div>
                    <p class="box_item--wrap_text">
                      鹿邑心脑血管医院晋升国家二级医院
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  mounted() {
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
  }
}
</script>

<style scoped>
.history-content-wrap { padding-bottom: 30px; }

.history-content-wrap .history-content--desc { padding: 50px 0; border-bottom: 1px solid #E7E7E7; }

.history-content-wrap .history-content--desc p, .history-content-wrap .history-content--desc div { font-size: 16px; font-weight: 400; color: #333; line-height: 30px; text-indent: 32px; }

.history-content2 { background-color: #F8F8F8; padding: 50px 0; }

.history-content2 .previous-leaders-wrap .title { font-size: 24px; font-weight: bold; color: #333; line-height: 28px; text-align: center; }

.history-content2 .leaders-wrap { position: relative; padding-left: 71px; border-bottom: 1px dashed #D3D3D3; }

.history-content2 .leaders-wrap:last-child { border-bottom: 0; }

.history-content2 .leaders-wrap .label { position: absolute; left: 0; top: 144px; font-size: 18px; font-weight: bold; color: #094689; line-height: 28px; }

.history-content2 .leaders-wrap .leaders-line-wrap { position: relative; }

.history-content2 .leaders-wrap .leaders-line-wrap .leaders-line-list { position: relative; height: 307px; }

.history-content2 .leaders-wrap .leaders-line-wrap.alt-style2 .middle-line { top: 152px; }

.history-content2 .leaders-wrap .leaders-line-wrap .middle-line { position: absolute; left: 0; top: 50%; width: 100%; height: 2px; margin-top: -1px; background-color: #D3D3D3; }

.history-content2 .leaders-wrap .leaders-line-wrap .middle-line::after, .history-content2 .leaders-wrap .leaders-line-wrap .middle-line::before { content: ""; position: absolute; top: 50%; left: -4.5px; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -o-transform: translateY(-50%); transform: translateY(-50%); width: 9px; height: 9px; border-radius: 50%; background-color: #D3D3D3; }

.history-content2 .leaders-wrap .leaders-line-wrap .middle-line::after { left: auto; right: -4.5px; }

.history-content2 .leaders-wrap .leaders-line-wrap .middle-line.hide-after::after { display: none; }

.history-content2 .leaders-wrap .leaders-line-wrap .right-yuan { position: absolute; right: -3px; top: 151px; width: 150px; height: 154px; background-color: #F8F8F8; z-index: 3; }

.history-content2 .leaders-wrap .leaders-line-wrap .right-yuan .right-yuan-box { width: 150px; height: 150px; border: 2px solid #D3D3D3; border-radius: 0 100% 100% 0; border-left: none; }

.history-content2 .leaders-wrap .leaders-line-item { position: relative; float: left; width: 150px; height: 100%; margin-left: -75px; }

.history-content2 .leaders-wrap .leaders-line-item:first-child { margin-left: 0; }

.history-content2 .leaders-wrap .leaders-line-item .leaders-line-box { position: absolute; left: 0; width: 100%; background-repeat: no-repeat; }

.history-content2 .leaders-wrap .leaders-line-item .leaders-line-box .text-time, .history-content2 .leaders-wrap .leaders-line-item .leaders-line-box .text-name { font-size: 14px; font-weight: 400; color: #333; line-height: 28px; text-align: center; }

.history-content2 .leaders-wrap .leaders-line-item.odd .leaders-line-box { bottom: 148px; padding-bottom: 49px; background-image: url("~~@/assets/his-line-t.png"); background-position: center bottom; }

.history-content2 .leaders-wrap .leaders-line-item.even .leaders-line-box { top: 148px; padding-top: 49px; background-image: url("~~@/assets/his-line-b.png"); background-position: center top; }

.history-content2 .leaders-wrap .leaders-line-list--bottom { position: relative; margin-top: -8px; }

.history-content2 .leaders-wrap .leaders-line-list--bottom .middle-line--bottom { position: absolute; top: 0; right: 0; height: 2px; background-color: #D3D3D3; width: 600px; }

.history-content2 .leaders-wrap .leaders-line-list--bottom .middle-line--bottom::before { content: ""; position: absolute; top: 50%; left: -4.5px; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -o-transform: translateY(-50%); transform: translateY(-50%); width: 9px; height: 9px; border-radius: 50%; background-color: #D3D3D3; }

.history-content2 .leaders-wrap .leaders-line-list--bottom .leaders-line-list--bottom_right { position: relative; z-index: 1; float: right; padding-right: 79px; margin-top: -13px; }

.history-content2 .leaders-wrap .leaders-line-list--bottom .leaders-line-list--bottom_right--item { float: left; width: 150px; }

.history-content2 .leaders-wrap .leaders-line-list--bottom .leaders-line-list--bottom_right--item .info-text { padding-top: 49px; background-image: url("~~@/assets/his-line-b.png"); background-position: center top; background-repeat: no-repeat; }

.history-content2 .leaders-wrap .leaders-line-list--bottom .leaders-line-list--bottom_right--item .info-text .text-time, .history-content2 .leaders-wrap .leaders-line-list--bottom .leaders-line-list--bottom_right--item .info-text .text-name { font-size: 14px; font-weight: 400; color: #333; line-height: 28px; text-align: center; }

.history-content1 { padding-top: 50px; }

.history-content1 .history-fzlc-header { margin-bottom: 50px; text-align: center; }

.history-content1 .history-fzlc-header .text1 { font-size: 24px; font-weight: bold; color: #333; line-height: 30px; }

.history-content1 .history-fzlc-header .text2 { font-size: 16px; font-weight: 400; color: #333; line-height: 30px; }

.history-content1 .history-fzlc-wrap { position: relative; padding-top: 58px; }

.history-content1 .history-fzlc-wrap .history-fzlc-wrap--line { position: absolute; left: 50%; top: 0; width: 1px; height: 100%; background-color: #E7E7E7; }

.history-content1 .history-fzlc-wrap .history-fzlc-wrap--line::before { content: ""; position: absolute; top: -15px; left: 50%; -webkit-transform: translateX(-50%); -moz-transform: translateX(-50%); -ms-transform: translateX(-50%); -o-transform: translateX(-50%); transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; border: 1px solid #E7E7E7; }

.history-content1 .history-fzlc-item { position: relative; padding-bottom: 50px; }

.history-content1 .history-fzlc-item .point { position: absolute; left: 50%; top: 6px; -webkit-transform: translateX(-50%); -moz-transform: translateX(-50%); -ms-transform: translateX(-50%); -o-transform: translateX(-50%); transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; border: 1px solid #094689; }

.history-content1 .history-fzlc-item .point::before { content: ""; position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); width: 8px; height: 8px; border-radius: 50%; background-color: #094689; }

.history-content1 .history-fzlc-item .fzlc-item-text, .history-content1 .history-fzlc-item .fzlc-item-img { width: 50%; }

.history-content1 .history-fzlc-item.odd .fzlc-item-text { float: left; padding-right: 55px; }

.history-content1 .history-fzlc-item.odd .fzlc-item-img { float: right; padding-left: 55px; }

.history-content1 .history-fzlc-item.even .fzlc-item-text { float: right; padding-left: 55px; }

.history-content1 .history-fzlc-item.even .fzlc-item-text .item-text-top--tips { float: right; }

.history-content1 .history-fzlc-item.even .fzlc-item-text .item-text-top--text { float: left; text-align: left; }

.history-content1 .history-fzlc-item.even .fzlc-item-img { float: left; padding-right: 55px; }

.history-content1 .history-fzlc-item.even .fzlc-item-img .fzlc-item-img--box::before { left: auto; right: 10px; }

.history-content1 .history-fzlc-item .fzlc-item-text .item-text-top { margin-bottom: 29px; }

.history-content1 .history-fzlc-item .fzlc-item-text .item-text-top--tips { position: relative; float: left; width: 70px; height: 70px; background-repeat: no-repeat; background-position: center center;
  background-color: #edeef3; }

.history-content1 .history-fzlc-item .fzlc-item-text .item-text-top--tips span { display: inline-block; font-size: 20px; font-weight: bold; color: #094689; line-height: 1; margin-top: 15px; margin-left: 15px; padding-bottom: 9px; border-bottom: 1px solid #094689; }

.history-content1 .history-fzlc-item .fzlc-item-text .item-text-top--text { color: #333; line-height: 1; text-align: right; }

.history-content1 .history-fzlc-item .fzlc-item-text .item-text-top--text .text1 { font-size: 32px; font-weight: bold; margin-bottom: 19px; }

.history-content1 .history-fzlc-item .fzlc-item-text .item-text-top--text .text2 { font-size: 18px; font-weight: 400; }

.history-content1 .history-fzlc-item .fzlc-item-text .item-text-content p, .history-content1 .history-fzlc-item .fzlc-item-text .item-text-content div { font-size: 14px; color: #666; line-height: 28px; }

.history-content1 .history-fzlc-item .fzlc-item-img { margin-top: 12px; }

.history-content1 .history-fzlc-item .fzlc-item-img .fzlc-item-img--box { position: relative; padding-top: 24px; margin-left: -10px; margin-right: -10px; }

.history-content1 .history-fzlc-item .fzlc-item-img .fzlc-item-img--box::before { content: ""; position: absolute; left: 10px; top: 0; width: 62px; height: 4px; background-color: #333; }

.history-content1 .history-fzlc-item .fzlc-item-img .fzlc-item-img--box .fzlc-item-img--box_item { float: left; width: 50%; padding: 0 10px; }

.history-content1 .history-fzlc-item .fzlc-item-img .fzlc-item-img--box .fzlc-item-img--box_item .box_item--wrap { width: 100%; background-color: #F8F8F8; height: 303px; padding: 20px 20px 0 20px; overflow: hidden; }

.history-content1 .history-fzlc-item .fzlc-item-img .fzlc-item-img--box .fzlc-item-img--box_item .box_item--wrap_img { margin-bottom: 17px; }

.history-content1 .history-fzlc-item .fzlc-item-img .fzlc-item-img--box .fzlc-item-img--box_item .box_item--wrap_img img { display: block; width: 100%; }

.history-content1 .history-fzlc-item .fzlc-item-img .fzlc-item-img--box .fzlc-item-img--box_item .box_item--wrap_text { font-size: 14px; font-weight: 400; color: #333; line-height: 20px; }

</style>
