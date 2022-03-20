<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <img class="img-block" src="@/assets/images/zhinan.jpg" alt="">
        <div class="depart-tabs-wrap wow fadeInUp">
          <ul class="link-tabs-list clearfix alt-jyzn-tb style1">
            <li class="item fl   " @click="$router.push({path:'/hospitallayout'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-6"></div>
                  <p class="text">医院地址</p>
                </div>
              </a>
            </li>
            <li class="item fl "  @click="$router.push({path:'/appointment'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-4"></div>
                  <p class="text">预约挂号</p>
                </div>
              </a>
            </li>
            <li class="item fl active" @click="$router.push({path:'/medicalguide'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-1"></div>
                  <p class="text">就医指南</p>
                </div>
              </a>
            </li>
            <li class="item fl" @click="$router.push({path:'/health'})">
              <a  class="box">
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
                  <li class="b-item active" @click="$router.push({path:'/medicalguide'})">
                    <a  class="block">
                      <p class="text-link">就医指南</p>
                    </a>
                  </li>
                  <li class="b-item " @click="$router.push({path:'/hospitallayout'})">
                    <a  class="block">
                      <p class="text-link">医院地址</p>
                    </a>
                  </li>
                  <li class="b-item ">
                    <a  class="block">
                      <p class="text-link" @click="$router.push({path:'/health'})">健康体检</p>
                    </a>
                  </li>
                  <li class="b-item ">
                    <a  class="block">
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
                <p class="situation-content--title">就医指南</p>
                <p class="situation-content--desc">medicalGuide</p>
                <div class="situation-content-text">
                  <p>
                    1、门诊病人需要首先到挂号处分诊，填写门诊病历后挂号。如就诊前有电话预约或网络预约，请向工作人员说明，享受挂号和就诊的相关优惠。如果是新农合参保人员，请主动出示证件。 危重病员可到急诊科优先就诊再挂号。
                  </p>
                  <p>2、根据分诊情况，由导医带领患者到相关诊室就诊。如需排队，可到候诊大厅休息，候诊大厅提供免费饮用水、免费电视和上网服务。就诊时请出示挂号票、门诊病历，如果是新农合参保人员，出示证件</p>
                  <p>3、根据医生问诊和初步检查后，开写的有关检查项目，请在导医带领下交费后进行检查，等待检查结果出来后，返回就诊室，请首诊医生根据检查结果综合分析后做出初步诊断，并进行相应的治疗。 诊室内保持一医一患，根据患者实际情况需要可允许家属陪伴。</p>
                  <p>4、取药程序：请持处方去一楼收款处划价，交款后再到一楼相应的中、西药房取药。</p>
                  <p>5、留诊观察和治疗时，请在导医带领下办理留诊手续；需住院治疗的病人到住院部办理住院手续。</p>
                  <p>6、患者及家属应积极配合治疗，如患者病情有变化，出现心理或精神方面异常，请及时与医生取得联系，以便采取相应措施。</p>
                  <p>7、请您遵守医院各项规章制度，爱护公物、不得大声喧哗、打闹，注意保持医院肃静，讲究公共道德，禁止随地吐痰，禁止吸烟及乱丢果皮纸屑等。</p>
                  <p>8、就诊过程中请您保管好钱和物，防止丢失，交款时钱票请当面点清。</p>
                  <p>9、您需要咨询的可向导诊台工作人员咨询。导诊台可为患者提供各方面服务，可为您负责保管物品，开水、平车、轮椅随时可用。</p>
                  <p>10、门诊坐诊时间周一至周日，节假日不休息。</p>
                  <p style="text-align: right;color: #2358C0">如有疑问，请点击直接资讯相关专家，或拨打电话：0394-7455120</p>
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
  name: "MedicalGuide",
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
.situation-content-wrap .situation-content--title { font-size: 36px; font-weight: bold; color: #333333; line-height: 1; margin-bottom: 9px; }

.situation-content-wrap .situation-content--desc { font-size: 18px; font-weight: 400; color: #333333; line-height: 1; margin-bottom: 22px; }

.situation-content-wrap .situation-content-text p, .situation-content-wrap .situation-content-text div { font-size: 14px; font-weight: 400; color: #333; line-height: 26px; text-indent: 28px; margin-bottom: 18px; }

.situation-content-wrap .situation-content-pic { position: relative; padding: 20px; border: 1px solid #E7E7E7; }

.situation-content-wrap .situation-content-pic::before { content: ""; display: inline-block; vertical-align: middle; width: 0; height: 100%; }

.situation-content-wrap .situation-content-pic .situation-content-pic_logo { display: inline-block; vertical-align: middle;     margin: 10px;width: 45%;}

</style>
