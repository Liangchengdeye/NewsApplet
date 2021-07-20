package com.ruoyi.common.core.page;

import com.ruoyi.common.utils.StringUtils;

import java.util.Map;

/**
 * 分页数据
 * 
 * @author ruoyi
 */
public class PageDomain
{
    @Override
    public String toString() {
        return "PageDomain{" +
                "pageNum=" + pageNum +
                ", pageSize=" + pageSize +
                ", orderByColumn='" + orderByColumn + '\'' +
                ", isAsc='" + isAsc + '\'' +
                ", pageParams=" + pageParams +
                '}';
    }

    /** 当前记录起始索引 */
    private Integer pageNum;

    /** 每页显示记录数 */
    private Integer pageSize;

    /** 排序列 */
    private String orderByColumn;

    /** 排序的方向desc或者asc */
    private String isAsc = "asc";


    public Map<String, Object> getPageParams() {
        return pageParams;
    }

    public void setPageParams(Map<String, Object> pageParams) {
        this.pageParams = pageParams;
    }

    private Map<String, Object> pageParams;

    public PageDomain() {
    }

    public String getOrderBy()
    {
        if (StringUtils.isEmpty(orderByColumn))
        {
            return "";
        }
        return StringUtils.toUnderScoreCase(orderByColumn) + " " + isAsc;
    }

    public Integer getPageNum()
    {
        return pageNum;
    }

    public void setPageNum(Integer pageNum)
    {
        this.pageNum = pageNum;
    }

    public Integer getPageSize()
    {
        return pageSize;
    }

    public void setPageSize(Integer pageSize)
    {
        this.pageSize = pageSize;
    }

    public String getOrderByColumn()
    {
        return orderByColumn;
    }

    public void setOrderByColumn(String orderByColumn)
    {
        this.orderByColumn = orderByColumn;
    }

    public String getIsAsc()
    {
        return isAsc;
    }

    public void setIsAsc(String isAsc)
    {
        this.isAsc = isAsc;
    }
}
