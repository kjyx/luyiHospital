<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <img class="img-block" src="@/assets/images/zhinan.jpg" alt="">
        <div class="depart-tabs-wrap wow fadeInUp">
          <ul class="link-tabs-list clearfix alt-jyzn-tb style1">
            <li class="item fl" @click="$router.push({path:'/hospitallayout'})">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-6"></div>
                  <p class="text">医院地址</p>
                </div>
              </a>
            </li>
            <li class="item fl" @click="$router.push({path:'/appointment'})">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-4"></div>
                  <p class="text">预约挂号</p>
                </div>
              </a>
            </li>
            <li class="item fl" @click="$router.push({path:'/medicalguide'})">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-1"></div>
                  <p class="text">就医指南</p>
                </div>
              </a>
            </li>
            <li class="item fl active" @click="$router.push({path:'/health'})">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-5"></div>
                  <p class="text">健康体检</p>
                </div>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
    <div class="layout-2-content">
      <div class="container">
        <div class="d-container clearfix">
          <div class="left fl wow fadeInLeft">
            <div class="mz-side-links-list">
              <div class="title-box">
                <p class="text2">
                  <span class="span1">就医指南</span><span class="span2">Guide to seeking medical</span>
                </p>
              </div>
              <div class="body-box">
                <ul>
                  <li class="b-item" @click="$router.push({path:'/medicalguide'})">
                    <a class="block">
                      <p class="text-link">就医指南</p>
                    </a>
                  </li>
                  <li class="b-item " @click="$router.push({path:'/hospitallayout'})">
                    <a class="block">
                      <p class="text-link">医院地址</p>
                    </a>
                  </li>
                  <li class="b-item active">
                    <a class="block">
                      <p class="text-link" @click="$router.push({path:'/health'})">健康体检</p>
                    </a>
                  </li>
                  <li class="b-item ">
                    <a class="block">
                      <p class="text-link" @click="$router.push({path:'/appointment'})">预约挂号</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right  fr wow fadeInRight alt-pl-30">
            <div class="common-right-content">
              <div class="situation-content-wrap">
                <p class="situation-content--title">体检中心简介</p>
                <p class="situation-content--desc">Introduction</p>
                <div class="situation-content-text">
                  <p>1、体检请先预约安排;体检前一天忌酒，十点之后禁食（包括少喝水），限高脂高蛋白饮食，避免使用对肝肾功能有影响的药物。</p>
                  <p>2、检查前一——两日饮食宜清淡，勿食猪肝、猪血等含血性之食物，检查前一日晚上十二点以后，请完全禁食(包括饮水)。</p>
                  <p>3、抽血及肝、胆B超须空腹进行;做膀胱、前列腺、子宫、附件B超时，请勿排尿;如无尿，需饮水至膀胱充盈。</p>
                  <p>4、做X线检查时，宜穿棉布内衣，勿穿带有金属钮扣的衣服、文胸;请摘去项链、手机、钢笔、钥匙 等金属物品。怀孕及有可能怀孕之女性受检者，请先告知健检服务人员，慎做X光检查。</p>
                  <p>5、女士生理期，不宜作妇科检查及尿检;做妇科检查前应排空膀胱;乳腺远红外线复查最好选择在生理期后一周内。未婚女士不宜做妇科检查，有特殊需求者要签署相关协议(告知书)方可进行相应检查</p>
                  <p>6、内科体检前请先测血压、身高、体重。</p>
                  <p>7、检查当天需抽完血、做完腹部超音波检查后，方可进食。</p>
                  <p>8、体检当日穿着要求：穿脱方便的服装、鞋袜，最好不佩戴项链等，女同志的文胸不要带钢托，不要穿金属亮片的内衣。</p>
                  <p>9、体检有热成像项目时，检前须排空便、尿，还须禁食、水。</p>
                </div>
                <p>中心环境</p>
                <div class="situation-content-pic">
                  <img class="situation-content-pic_logo" src="../Honor/images/yiyuan1.jpg" alt="">
                  <img class="situation-content-pic_logo" src="../Honor/images/yiyuan.jpg" alt="">
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
  name: "Health",
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
.situation-content-wrap .situation-content--title {
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  line-height: 1;
  margin-bottom: 9px;
}

.situation-content-wrap .situation-content--desc {
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  line-height: 1;
  margin-bottom: 22px;
}

.situation-content-wrap .situation-content-text p, .situation-content-wrap .situation-content-text div {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  line-height: 26px;
  text-indent: 28px;
  margin-bottom: 18px;
}

.situation-content-wrap .situation-content-pic {
  position: relative;
  padding: 20px;
  border: 1px solid #E7E7E7;
}

.situation-content-wrap .situation-content-pic::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
}

.situation-content-wrap .situation-content-pic .situation-content-pic_logo {
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
  width: 45%;
}

</style>
