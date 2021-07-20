package com.ruoyi.web.controller.tool;

import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.page.PageHelperParams;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.system.domain.WebNews;
import com.ruoyi.system.service.IWebNewsService;
import io.swagger.annotations.*;
import javafx.scene.control.TableColumn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * 数图行新闻资讯Controller
 * 
 * @author wuhaojie
 * @date 2021-07-17
 */
@Api(value = "WebNewsApiController", description = "新闻资讯API接口")
@RestController
@RequestMapping("/system/news/api")
public class WebNewsApiController extends BaseController
{

    @Autowired
    private IWebNewsService webNewsService;


    @ApiOperation("获取详细文章内容")
    @ApiImplicitParam(name = "titleId", value = "文章ID", required = true, dataType = "String", paramType = "path")
    @GetMapping("/title/{titleId}")
    public WebNews titleView(@PathVariable("titleId") String titleId){
        return webNewsService.selectWebNewsById(titleId);
    }

    @PostMapping(value="/list", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "获取文章列表", notes = "\"params\":{\"pageSize\":10,\"pageNum\":1,\"isAsc\":\"desc\",\"orderByColumn\":\"hot\"}")
    public TableDataInfo list(@RequestBody WebNews webNews)
    {
        PageHelperParams pageHelperParams = new PageHelperParams();
        pageHelperParams.pageParams(webNews);
        List<WebNews> list = webNewsService.selectWebNewsList(webNews);
        return getDataTable(list);
    }

    @PostMapping(value = "/visit", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "修改浏览量", notes = "{\"visitCount\":0,\"titleId\":\"\"}")
    public int update(@RequestBody WebNews webNews){
        Long webNewsVisit= webNewsService.selectWebNewsById(webNews.getTitleId()).getVisitCount();
        webNews.setVisitCount(webNewsVisit+1);
        return webNewsService.updateWebNews(webNews);
    }
}
