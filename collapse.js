/**
 * 标题栏，可以对标题栏里面的内容收缩与展开
 */
Vue.component('collapse-div', {
    template: `
    <div :id="tid" style="width:100%;font-weight:bold;border:1px solid #F6E6CC;background-color:#FFFCF9 !important;color:#000;height:40px;line-height:40px;margin-top: 20px;" @click="toggle">
        <span class="no-padding">
        <i v-if="checked" class="glyphicon glyphicon-minus-sign" style="color:#FF9B01;margin:auto 5px"></i>
        <i v-if="!checked" class="glyphicon glyphicon-plus-sign" style="color:#FF9B01;margin:auto 5px;"></i>
        &nbsp;{{label}}
        </span>
        <p v-if="!checked && content" style="margin: -40px auto 0;text-align: center;font-weight: normal;color: red;">{{content}}</p>
    </div>
    `,
    props: {
        label: {
            type: String,
            default: '',
            required: true
        },
        collapsed: {
            type: Boolean,
            default: true,
            required: false
        },
        content: {
            type: String,
            default: '',
            required: false
        }
    },
    data(){
        return {
            checked: true,
            tid: ""
        }
    },
    ready(){
        this.checked = this.collapsed;
        this.tid = Math.random().toString().split('.')[1];
    },
    methods: {
        toggle: function() {
            this.checked = !this.checked;
        }
    },
    watch:{
        checked(n){
            let nd = $('#'+this.tid).next();
            if(nd.length === 0) return;
            if(n) nd.slideDown(100);
            else nd.slideUp(100);
        }
    }
});