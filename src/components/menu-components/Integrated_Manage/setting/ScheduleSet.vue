<template>
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Ban-tab" data-toggle="tab" href="#Ban-inner" role="tab" aria-controls="dmg" aria-selected="true">班次设置</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " id="List-tab" data-toggle="tab" href="#List-inner" role="tab" aria-controls="dmg" aria-selected="true">列出所有班次设置信息</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <!-- 班次设置 -->
      <div class="tab-pane fade show active" id="Ban-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
            <div class="form-group row d-flex justify-content-center">
                <input class="form-check-input numberInMine" type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked="">
                <label class="form-check-label" for="exampleRadios1">
                    为全矿/部门设置班次
                </label>
                <div>
                    <label>部门：</label>
                    <select class="check-select1" name="departmanage">
                        <option selected="">-----全矿默认-----</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="form-group row d-flex justify-content-center">
                <input class="form-check-input numberInMine" type="radio" name="exampleRadios" id="exampleRadios2" value="2">
                <label class="form-check-label" for="exampleRadios2">
                为特殊性工种设置班次
                </label>
                <div>
                    <label>工种：</label>
                    <select class="check-select2" disabled="" name="worktype">
                        <option selected="">------请选择------</option>
                        <option value="1">One</option>
                    </select>
                </div>
            </div>

            <div class="form-group row d-flex justify-content-center">
                <input class="form-check-input numberInMine" type="radio" name="exampleRadios" id="exampleRadios3" value="3">
                <label class="form-check-label" for="exampleRadios3">
                为指定员工设置班次
                </label>
                <div>
                    <label>员工：</label>
                    <select class="check-select3" disabled="" name="people">
                        <option selected="">------请选择------</option>
                        <option value="1"></option>
                    </select>
                </div>
            </div>
            <div class="form-group row d-flex justify-content-center">
                <div class="col-sm-1">
                    <button type="button" class="search-bc btn btn-primary btn-md">查询</button>
                </div>
              </div>
            <table class="table table-hover" id="table">
              <thead>
                <tr>
                  <th scope="col">序号</th>
                  <th scope="col">职务编号</th>
                  <th scope="col">职务名称</th>
                  <th scope="col">现有人数</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
            </table>
            <div class="d-flex col-sm-12 offset-4">
              <button type="submit" class="btn btn-primary mr-5">导出到EXcel</button>
              <button type="submit" class="btn btn-primary ml-5">打印</button>
            </div>
        </form>
      </div>
      <!-- 列出所有班次设置信息 -->
      <div class="tab-pane fade show" id="List-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="tab-content" id="tab-content">
            <div class="tab-pane fade" id="baseSet">
                <form>
                    <div class="form-group row">
                        <input class="form-check-input numberInMine" type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked="">
                        <label class="form-check-label" for="exampleRadios1">
                            为全矿/部门设置班次
                        </label>
                        <div>
                            <label>部门：</label>
                            <select class="check-select1" name="departmanage">
                                <option selected="">-----全矿默认-----</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <input class="form-check-input numberInMine" type="radio" name="exampleRadios" id="exampleRadios2" value="2">
                        <label class="form-check-label" for="exampleRadios2">
                        为特殊性工种设置班次
                        </label>
                        <div>
                            <label>工种：</label>
                            <select class="check-select2" disabled="" name="worktype">
                                <option selected="">------请选择------</option>
                                <option value="1">One</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <input class="form-check-input numberInMine" type="radio" name="exampleRadios" id="exampleRadios3" value="3">
                        <label class="form-check-label" for="exampleRadios3">
                        为指定员工设置班次
                        </label>
                        <div>
                            <label>员工：</label>
                            <select class="check-select3" disabled="" name="people">
                                <option selected="">------请选择------</option>
                                <option value="1"></option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-sm-1" >
                            <button type="button" class="search-bc btn btn-primary btn-md">查询</button>
                        </div>
                    </div>
                </form>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">序号</th>
                            <th scope="col">发生日期</th>
                            <th scope="col">操作人</th>
                            <th scope="col">操作对象</th>
                            <th scope="col">类型</th>
                            <th scope="col">被操作员工</th>
                            <th scope="col">操作描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col-sm-2">
                        <button type="button" class="btn btn-primary btn-lg">导出Excel</button>
                    </div>
                    <div class="col-sm-1">
                        <button type="button" class="btn btn-primary btn-lg">打印</button>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade row active show" id="authSet">
                <h4>全矿所有班次设置列表</h4>
                <table class="table table-bordered">
                    <tbody><tr>
                        <th scope="col" rowspan="2">全矿班次设置</th>
                        <th scope="col">班次</th>
                        <th scope="col">起止时间</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody></table>
                <h5>特殊部门设置班次</h5>
                <table class="table table-bordered">
                    <tbody><tr>
                        <th scope="col" rowspan="2">部门名称</th>
                        <th scope="col">班次</th>
                        <th scope="col">起止时间</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody></table>
                <h5>特殊工种设置班次</h5>
                <table class="table table-bordered">
                    <tbody><tr>
                        <th scope="col" rowspan="2">工种名称</th>
                        <th scope="col">班次</th>
                        <th scope="col">起止时间</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody></table>
                <h5>特殊员工设置班次</h5>
                <table class="table table-bordered">
                    <tbody><tr>
                        <th scope="col" rowspan="2">工种名称</th>
                        <th scope="col">班次</th>
                        <th scope="col">起止时间</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody></table>
            </div>
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
