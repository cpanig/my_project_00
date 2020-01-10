<template>
  <div>
    <ul class="list-group">
       <li class="list-group-item active">考勤管理</li>
       <router-link to="/home/Attendance_Manage" class="list-group-item list-group-item-action">部门日考勤查询</router-link>
       <router-link to="/home/Attendance_Manage/PersonMonthQuery" class="list-group-item list-group-item-action">个人月考勤查询</router-link>
       <router-link to="/home/Attendance_Manage/CadreDayQuery" class="list-group-item list-group-item-action">干部日考勤查询</router-link>
       <router-link to="/home/Attendance_Manage/CadreMonthStatistic" class="list-group-item list-group-item-action">干部月考勤统计</router-link>
       <router-link to="/home/Attendance_Manage/DepMonthAttendASta" class="list-group-item list-group-item-action">部门月考勤统计</router-link>
       <router-link to="/home/Attendance_Manage/DepHourStatistic" class="list-group-item list-group-item-action">部门工时统计</router-link>
       <router-link to="/home/Attendance_Manage/MineDayAttendSta" class="list-group-item list-group-item-action">全矿日考勤统计</router-link>
       <router-link to="/home/Attendance_Manage/MineMonthAttendSta" class="list-group-item list-group-item-action">全矿月考勤统计</router-link>
       <router-link to="/home/Attendance_Manage/LateEarlyQuery" class="list-group-item list-group-item-action">迟到早退查询</router-link>
       <router-link to="/home/Attendance_Manage/InterruptAttendReduce" class="list-group-item list-group-item-action">中断考勤归并</router-link>
       <router-link to="/home/Attendance_Manage/AttendManualCorrection" class="list-group-item list-group-item-action">考勤手动修正</router-link>
       <router-link to="/home/Attendance_Manage/AttendTransfer" class="list-group-item list-group-item-action">考勤转移</router-link>
     </ul>
  </div>
</template>

<script>
</script>

<style>
</style>
