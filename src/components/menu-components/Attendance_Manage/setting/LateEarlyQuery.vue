<template>
  <!-- 迟到早退查询 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">迟到早退查询</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group row col-sm-12">
                <label for="" class="col-md-1 col-form-label ">部门：</label>
                <select class="form-control col-md-4">
                    <option selected disabled="">----全部----</option>
                    <option></option>
                    <option></option>
                </select>
                <label for="" class="col-md-1 col-form-label">小组：</label>
                <select class="form-control col-md-4">
                    <option selected disabled="">----全部----</option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div class="form-group row col-sm-12">
                <label for="" class="col-md-1 col-form-label ">部门：</label>
                <select class="form-control col-md-4">
                    <option selected disabled="">----全部----</option>
                    <option></option>
                    <option></option>
                </select>
                <label for="" class="col-md-1 col-form-label">卡号：</label>
                <select class="form-control col-md-2">
                    <option selected disabled="">----全部----</option>
                    <option></option>
                    <option></option>
                </select>
                <input class="form-control col-md-2" type="text" value="">
            </div>
            <div class="form-group row col-sm-12">
                <label for="" class="col-md-1 col-form-label">日期：</label>
                <input class="form-control col-md-3" type="datetime-local" value="">
                <div class="col-md-1 mt-2 ml-2">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">全天</label>
                </div>
                <label for="" class="col-md-1 col-form-label">班次：</label>
                <input class="form-control col-md-4" type="text" value="">
            </div>
            <div class="form-group row offset-1">
                <div class="col-md-3">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                    <label class="form-check-label" for="exampleRadios1">迟到</label>
                </div>
                <div class="col-md-3">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                    <label class="form-check-label" for="exampleRadios2">早退</label>
                </div>
            </div>
            <div class="form-group row offset-5">
                <div>
                    <button type="button" class="btn btn-primary mr-1">添加</button>
                    <button type="button" class="btn btn-primary">查询</button>
                </div>
            </div>
        <table class="table table-hover">
            <tbody><tr>
                <th scope="col">序号</th>
                <th scope="col">部门</th>
                <th scope="col">小组</th>
                <th scope="col">工种</th>
                <th scope="col"> 班次</th>
                <th scope="col">卡号</th>
                <th scope="col">日期</th>
                <th scope="col">迟到</th>
                <th scope="col">早退</th>
                <th scope="col">全天</th>
            </tr>
            <tr>
                <td scope="row">1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <input class="form-check-input" type="checkbox">
                </td>
                <td>
                    <input class="form-check-input" type="checkbox">
                </td>
                <td>
                    <input class="form-check-input" type="checkbox">
                </td>
            </tr>
        </tbody></table>
        <div class="common-button">
            <button type="button" class="btn btn-primary">确定</button>
        </div>
      </form>
     </div>
    </div>
</div>
</template>

<script>
</script>

<style>
</style>
