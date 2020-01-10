<template>
<!-- 位置查询 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Psearch-tab" data-toggle="tab" href="#Psearch-inner" role="tab" aria-controls="dmg" aria-selected="true">部门日考勤管理</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Psearch-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group row col-sm-12">
            <label for="input19" class="col-form-label col-sm-2">输入员工卡号：</label>
            <div class="col-sm-4">
              <select class="custom-select">
                <option selected>----全部----</option>
                <option value="1">……</option>
              </select>
            </div>
            <div class="col-md-1">
              <button type="submit" class="btn btn-primary">选择</button>
            </div>
            <div class="col-md-1">
              <button type="submit" class="btn btn-primary">查询</button>
            </div>
          </div>
        </form>
        <!-- 表格 -->
        <table class="table table-bordered" style="margin-top: 4%; width: 90%;">
            <tbody>
                <tr>
                    <th>工号：</th>
                    <td></td>
                    <th>卡号：</th>
                    <td></td>
                </tr>
                <tr>
                    <th>姓名：</th>
                    <td></td>
                    <th>部门：</th>
                    <td></td>
                </tr>
                <tr>
                    <th>当前位置：</th>
                    <td></td>
                    <th>到达时间：</th>
                    <td></td>
                </tr>
                <tr>
                    <th>来源位置：</th>
                    <td></td>
                    <th>在此停留：</th>
                    <td></td>
                </tr>
                <tr>
                    <th>下井时间：</th>
                    <td></td>
                    <th>井下停留：</th>
                    <td></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
</div>
</template>

<script>
</script>

<style>
th{
  color: white;
}
</style>
