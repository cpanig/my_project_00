<template>
  <div>
    <ul class="list-group">
       <li class="list-group-item active">人员追踪</li>
       <router-link to="/home/Staff_Tracking/SelectTrack" class="list-group-item list-group-item-action">选择追踪</router-link>
       <router-link to="/home/Staff_Tracking/RealtimeTrack" class="list-group-item list-group-item-action">实时追踪</router-link>
       <router-link to="/home/Staff_Tracking/PositionSearch" class="list-group-item list-group-item-action">位置查询</router-link>
       <router-link to="/home/Staff_Tracking/ActivityTrack" class="list-group-item list-group-item-action">活动轨迹</router-link>
       <router-link to="/home/Staff_Tracking/TrackReappear" class="list-group-item list-group-item-action">轨迹再现</router-link>
       <router-link to="/home/Staff_Tracking/PersonalPosition" class="list-group-item list-group-item-action">个人定位</router-link>
     </ul>
  </div>
</template>

<script>
</script>

<style>
</style>
