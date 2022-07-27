import React from 'react';
import {SvgWrapper} from "../Wrappers";

export const SkillsImg = ({ className }: { className?: string }) => {
    return (
        <SvgWrapper width='1.5vw' viewBox="0 0 510 510" version="1.1" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fill="#7c7c7c" d="M194.76,154.224L253.528,256L194.76,357.784H77.24L18.472,256L77.24,154.224H194.76 M204,138.224H68L0,256l68,117.784h136
	L272,256L204,138.224z"/>
            <path fill="#7c7c7c" d="M434.76,16l58.76,101.776L434.76,219.56H317.24l-58.768-101.776L317.24,16H434.76 M444,0H308
	l-68,117.784l68,117.776h136l68-117.776L444,0z"/>
            <path fill="#7c7c7c" d="M434.76,292.44l58.76,101.776L434.76,496H317.24l-58.768-101.776l58.76-101.776L434.76,292.44
	 M444,276.448H308l-68,117.776L308,512h136l68-117.776L444,276.448L444,276.448z"/>
        </SvgWrapper>
    )
}