<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">

        <!--when click on User 1, browser url willc change to www.example.com/user/1 then UserDetail component
        will be loaded -->
            <router-link
                  style="cursor: pointer"
                  class="list-group-item"
                  tag="li"
                  to="/user/1" >User 1
            </router-link>
            <router-link
                  style="cursor: pointer"
                  class="list-group-item"
                  tag="li"
                  to="/user/2" >User 2
            </router-link>
            <router-link
                  style="cursor: pointer"
                  class="list-group-item"
                  tag="li"
                  to="/user/3" >User 3
            </router-link>


        </ul>
    </div>
</template>
