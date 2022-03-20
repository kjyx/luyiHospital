import {reqExpertsStyleInfo} from "@/api";
export default {
    data(){
        return{
            dialogShow:false,
            doctorInfo:{}
        }
    },
    mounted() {

    },
    methods:{
        // 专家详情弹框
        async bounced(id){
            this.doctorInfo = {}
            this.dialogShow = true
            const result = await reqExpertsStyleInfo(id)
            if(result.code === 200){
                this.doctorInfo = result.data
            }
        }
    }
}
