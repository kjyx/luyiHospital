<template>
  <div class="overview-wrap">
    <div class="container">
      <div class="ov-baner-wrap">
        <img class="img-block" src="@/assets/images/gaikuang.jpg" alt="">
        <div class="ov-ban-tabs wow fadeInUp">
          <ul class="link-tabs-list alt-survey clearfix">
            <li class="item fl " @click="$router.push({path:'/hospitalProfile'})">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-1"></div>
                  <p class="text">医院简介</p>
                </div>
              </a>
            </li>
            <li class="item fl " @click="$router.push({path:'/honor'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-2"></div>
                  <p class="text">荣誉历程</p>
                </div>
              </a>
            </li>
            <li class="item fl  active ">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-3"></div>
                  <p class="text">院长致辞</p>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div class="ov-content-wrap  wow fadeInUp">
        <h2 class="title">院长致辞</h2>
        <div class="text">
          <p>
            <img class="fr" src="~@/assets/images/yuanzhang.jpg" alt="" style="width: 25%">
            我院是一家集医疗、康复、体检、养老、护理为一体，以心脑血管疾病为主的非营利性专科医院。 随着生活水平的提高，老龄化的增长，全国每年死于心脑血管疾病的人数高达3500万人，居各种疾病死因首位。心脑血管疾病具有“发病率高、致残率高、死亡率高、复发率高，并发症多”的特点，并有年轻化的趋势。于2008年成立了鹿邑心脑血管医院，建院以来治愈数万名患者，近者周边县市，远者来自新疆、内蒙、包头、广州、山东等全国各地患者。
            2016年初我们新病房楼投入使用和环境改善，楼内宾馆式装修，豪华而时尚；引进有上百种大型医疗设备；建有层流净化手术室、层流净化产房、层流净化消毒供应室、层流净化重症监护室等设施；并与商丘市第一人民医院技术协作。温馨的就医环境，精湛的医疗技术、检查设备，使医院的发展再上新台阶。
            大医精诚，大爱无疆；救死扶伤，责无旁贷。在今后的工作中，我们将不负党和政府重托，认真履行保障人民群众身心健康的职责，让仁爱之光温暖每位患者，使患者生命焕发出精彩华章!
            我坚信：沐浴着医改春风，以住院疗养楼投入使用为新起点，全院职工精诚团结，共襄发展，鹿邑心脑血管医院的明天一定会更加灿烂辉煌!
            在此恭祝大家身心健康、万事如意、阖家幸福!
          </p>
        </div>
      </div>
    </div>
  </div>    	<!-- 页面中心内容 -->
  </div>
</template>

<script>
export default {
  name: "courtyardDistribution",
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
.overview-wrap { margin-top: 30px; }

.overview-wrap .ov-content-wrap { margin-top: 50px; }

.overview-wrap .ov-content-wrap .title { font-size: 39px; font-weight: 600; color: #333333; line-height: 36px; margin-bottom: 29px; }

.overview-wrap .ov-content-wrap .text p { font-size: 16px; color: #333; line-height: 30px; margin-bottom: 60px; }

.overview-wrap .ov-content-wrap .text img { padding-left: 36px; padding-bottom: 24px; }
</style>
