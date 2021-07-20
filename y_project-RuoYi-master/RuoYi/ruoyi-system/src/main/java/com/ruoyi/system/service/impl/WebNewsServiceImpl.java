package com.ruoyi.system.service.impl;

import java.util.List;
import com.ruoyi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.WebNewsMapper;
import com.ruoyi.system.domain.WebNews;
import com.ruoyi.system.service.IWebNewsService;
import com.ruoyi.common.core.text.Convert;

/**
 * 数图行新闻资讯Service业务层处理
 * 
 * @author wuhaojie
 * @date 2021-07-17
 */
@Service
public class WebNewsServiceImpl implements IWebNewsService 
{
    @Autowired
    private WebNewsMapper webNewsMapper;

    /**
     * 查询数图行新闻资讯
     * 
     * @param titleId 数图行新闻资讯ID
     * @return 数图行新闻资讯
     */
    @Override
    public WebNews selectWebNewsById(String titleId)
    {
        return webNewsMapper.selectWebNewsById(titleId);
    }

    /**
     * 查询数图行新闻资讯列表
     * 
     * @param webNews 数图行新闻资讯
     * @return 数图行新闻资讯
     */
    @Override
    public List<WebNews> selectWebNewsList(WebNews webNews)
    {
        return webNewsMapper.selectWebNewsList(webNews);
    }

    /**
     * 新增数图行新闻资讯
     * 
     * @param webNews 数图行新闻资讯
     * @return 结果
     */
    @Override
    public int insertWebNews(WebNews webNews)
    {
        webNews.setCreateTime(DateUtils.getNowDate());
        return webNewsMapper.insertWebNews(webNews);
    }

    /**
     * 修改数图行新闻资讯
     * 
     * @param webNews 数图行新闻资讯
     * @return 结果
     */
    @Override
    public int updateWebNews(WebNews webNews)
    {
        webNews.setUpdateTime(DateUtils.getNowDate());
        return webNewsMapper.updateWebNews(webNews);
    }

    /**
     * 删除数图行新闻资讯对象
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    @Override
    public int deleteWebNewsByIds(String ids)
    {
        return webNewsMapper.deleteWebNewsByIds(Convert.toStrArray(ids));
    }

    /**
     * 删除数图行新闻资讯信息
     * 
     * @param titleId 数图行新闻资讯ID
     * @return 结果
     */
    @Override
    public int deleteWebNewsById(String titleId)
    {
        return webNewsMapper.deleteWebNewsById(titleId);
    }
}
