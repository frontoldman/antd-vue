/**
 * Created by randada on 2016/5/13.
 */

<style type="text/css">
    .affix{
        position: fixed;
        top:0;
    }
</style>

 <template>
     <div class="affix" v-bind:style="affixStyle">
         <slot></slot>
     </div>
 </template>

 <script>

    export default {
      data () {
        return {
            offsetTop: null,
            offsetBottom: null
        }
      },
      ready () {
          this.affixStyle = {}
      },
      destroyed () {

      }
    }

 </script>


 
 