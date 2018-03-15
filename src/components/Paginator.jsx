
import React from "react";
import {Button} from 'react-bootstrap';
import {Icon} from 'react-font-awesome-5';
import {range} from "atp-pointfree";

const linksToShow = (page, totalPages, innerLinks, outerLinks) => {
    const offset = innerLinks + 1 + outerLinks;
    const maxLinks = 2 * offset + 1;
    if(maxLinks > totalPages) return range(1, totalPages);
    const links = range(1, maxLinks)
        .map(curLink => ({start: curLink,end: totalPages - maxLinks + curLink}))
        .map(({start, end}, index) => ({
            start,
            middle:
                page - offset <= 0              ? start :
                page + offset >= totalPages + 1 ? end :
                                                  page - offset + index,
            end
        }))
        .map(({start, middle, end}) => start <= outerLinks ? start :
            start == outerLinks + 1 ? (
                start == middle ? start : "..."
            ) :
            end > totalPages - outerLinks ? end :
            end == totalPages - outerLinks ? (
                end == middle ? end : "..."
            ) :
                middle
        );
    console.log("links for page " + page);
    console.log(links);
    return links;
}

export default ({page, totalPages, pagesToShow, size="lg", style="link", btnWidth="1em", onClick}) => {
    return <span>
        <Button bsSize={size} bsStyle={style} onClick={onClick(1)} title={1} disabled={page == 1}>
            <Icon.AngleDoubleLeft style={page == 1 ? {visibility: "hidden"} : {}}/>
        </Button>
        <Button bsSize={size} bsStyle={style} onClick={onClick(page - 1)} title={page - 1} disabled={page == 1}>
            <Icon.AngleLeft style={page == 1 ? {visibility: "hidden"} : {}}/>
        </Button>
        {linksToShow(page, totalPages, pagesToShow.inner, pagesToShow.outer).map(curPage =>
            <Button
                bsSize={size}
                bsStyle={style}
                onClick={onClick(curPage)}
                title={curPage}
                disabled={curPage == "..." || curPage == page}
                style={{
                    background: curPage === page ? "rgba(255, 255, 255, 0.1)" : "none"
                }}
            >
                <div style={{textAlign: "center", width: btnWidth}}>{
                    curPage === page && <b className="text-info">{curPage}</b> || curPage
                }</div>
            </Button>
        )}
        <Button bsSize={size} bsStyle={style} onClick={onClick(page + 1)} title={page + 1}
                disabled={page == totalPages}>
            <Icon.AngleRight style={page == totalPages ? {visibility: "hidden"} : {}}/>
        </Button>
        <Button bsSize={size} bsStyle={style} onClick={onClick(totalPages)} title={totalPages}
                disabled={page == totalPages}>
            <Icon.AngleDoubleRight style={page == totalPages ? {visibility: "hidden"} : {}}/>
        </Button>
    </span>;
}