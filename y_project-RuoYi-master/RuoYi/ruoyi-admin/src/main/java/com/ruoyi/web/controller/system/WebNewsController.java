package com.ruoyi.web.controller.system;

import java.util.List;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.system.domain.WebNews;
import com.ruoyi.system.service.IWebNewsService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 数图行新闻资讯Controller
 * 
 * @author wuhaojie
 * @date 2021-07-17
 */
@Controller
@RequestMapping("/system/news")
public class WebNewsController extends BaseController
{
    private String prefix = "system/news";

    @Autowired
    private IWebNewsService webNewsService;

    @RequiresPermissions("system:news:view")
    @GetMapping()
    public String news()
    {
        return prefix + "/news";
    }

    /**
     * 查询数图行新闻资讯列表
     */
    @RequiresPermissions("system:news:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(WebNews webNews)
    {
        startPage();
        List<WebNews> list = webNewsService.selectWebNewsList(webNews);
        return getDataTable(list);
    }

    /**
     * 导出数图行新闻资讯列表
     */
    @RequiresPermissions("system:news:export")
    @Log(title = "数图行新闻资讯", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(WebNews webNews)
    {
        List<WebNews> list = webNewsService.selectWebNewsList(webNews);
        ExcelUtil<WebNews> util = new ExcelUtil<WebNews>(WebNews.class);
        return util.exportExcel(list, "数图行新闻资讯数据");
    }

    /**
     * 新增数图行新闻资讯
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存数图行新闻资讯
     */
    @RequiresPermissions("system:news:add")
    @Log(title = "数图行新闻资讯", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(WebNews webNews)
    {
        return toAjax(webNewsService.insertWebNews(webNews));
    }

    /**
     * 修改数图行新闻资讯
     */
    @GetMapping("/edit/{titleId}")
    public String edit(@PathVariable("titleId") String titleId, ModelMap mmap)
    {
        WebNews webNews = webNewsService.selectWebNewsById(titleId);
        mmap.put("webNews", webNews);
        return prefix + "/edit";
    }


    /**
     * 修改保存数图行新闻资讯
     */
    @RequiresPermissions("system:news:edit")
    @Log(title = "数图行新闻资讯", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(WebNews webNews)
    {
        return toAjax(webNewsService.updateWebNews(webNews));
    }

    /**
     * 删除数图行新闻资讯
     */
    @RequiresPermissions("system:news:remove")
    @Log(title = "数图行新闻资讯", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(webNewsService.deleteWebNewsByIds(ids));
    }
}
