package com.ruoyi.system.service;

import java.util.List;
import com.ruoyi.system.domain.WebNews;

/**
 * 数图行新闻资讯Service接口
 * 
 * @author wuhaojie
 * @date 2021-07-17
 */
public interface IWebNewsService 
{
    /**
     * 查询数图行新闻资讯
     * 
     * @param titleId 数图行新闻资讯ID
     * @return 数图行新闻资讯
     */
    public WebNews selectWebNewsById(String titleId);

    /**
     * 查询数图行新闻资讯列表
     * 
     * @param webNews 数图行新闻资讯
     * @return 数图行新闻资讯集合
     */
    public List<WebNews> selectWebNewsList(WebNews webNews);

    /**
     * 新增数图行新闻资讯
     * 
     * @param webNews 数图行新闻资讯
     * @return 结果
     */
    public int insertWebNews(WebNews webNews);

    /**
     * 修改数图行新闻资讯
     * 
     * @param webNews 数图行新闻资讯
     * @return 结果
     */
    public int updateWebNews(WebNews webNews);

    /**
     * 批量删除数图行新闻资讯
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteWebNewsByIds(String ids);

    /**
     * 删除数图行新闻资讯信息
     * 
     * @param titleId 数图行新闻资讯ID
     * @return 结果
     */
    public int deleteWebNewsById(String titleId);
}
