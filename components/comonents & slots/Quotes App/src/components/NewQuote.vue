<template>
  <div class="row">
    <form>
       <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-2 form-group">
         <label>Quote</label>
         <textarea rows="3" class="form-control" v-model="quote"></textarea>
       </div>
       <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offeset-2 form-group">
         <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
       </div>
    </form>
  </div>
</template>
<script>
 export default {
   data : function(){
     return {
         quote:''
     }
   },
   methods:{
    createNew(){
      //when user adds the comment it emits the event to parent component i.e App.vue
       this.$emit('quoteAdded',this.quote);
       this.quote=''; // clear text area.
    }
   }
 }
</script>
