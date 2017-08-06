<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!  </p>
        <button @click="changeName">Change Name</button>
        <p>User : {{name}}</p>

        <p>User age : {{age}}
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-4">
                <app-user-detail :name="name"
                      @nameWasReset ="name = $event"
                      :resetFn="resetName"
                      :userAge="age"

                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-4">
                <app-user-edit :userAge="age"
                @ageWasEdited="age=$event"></app-user-edit>
            </div>

            <div class="col-xs-12 col-sm-4">
                <event-bus-child   :userAge="age"></event-bus-child>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import EventBusChild from './EventBusChild.vue';

    export default {
      data: function(){
        return {
          name:'Raj',
          age:27
        };
      },
      methods:{
         changeName:function(){
            this.name= 'Raja';
         },
         resetName(){
           this.name = "Raj"
         }
      },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit,
            eventBusChild: EventBusChild
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
