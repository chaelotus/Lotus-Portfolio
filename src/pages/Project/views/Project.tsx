import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { ProjectPageInfo } from '../../../common/constants';
import ProjectSection from '../../../common/components/ProjectSection';
import useCalculate from '../../../common/utils/customHooks/useCalculate';

const Project = () => {
	const [start, translateX] = useCalculate();
	console.log(start, translateX);
	gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 사용시 필수
	const sectionRef = useRef(null); // useRef로 참조할 요소
	const triggerRef = useRef(null);
	// horizontal 스크롤 애니메이션
	useEffect(() => {
		// 모든 ScrollTrigger 삭제

		const pin = gsap.fromTo(
			sectionRef.current, // gsap 애니메이션이 시작되는 요소 위치
			// 초기 시작, from 부분
			{
				translateX: 0,
			},
			// 끝 나는 부분, to 부분
			{
				translateX: translateX,
				scrollTrigger: {
					trigger: triggerRef.current, // 스크롤이 발생되는 요소 위치
					start: `top ${start}`,
					end: 'bottom center', // 트리거의 하단이 스크롤러의 중앙에 닿을 때
					scrub: 2, // 되감기 기능, 또한 스크롤을 부드러운 애니메이션 추가.
					pin: '#project', // 가로스크롤시 페이지를 고정할 수 있는 기능
				},
			},
		);
		return () => {
			pin.kill();
		}; // 모든 애니메이션 중단
	}, [start, translateX]);
	return (
		<section
			className="relative project-section flex flex-col pt-[10rem] mb-[20rem] h-screen dark:text-white"
			id="project"
		>
			<h1 className="items-start text-3xl font-NanumSquareNeoExtraBold mb-[5rem] md:mb-[3rem] sm:mb-[2rem] sm:text-2xl mobile:text-xl mobile:mb-[2rem]">
				PROJECT
			</h1>
			<div ref={triggerRef} className="w-full flex items-center">
				<div ref={sectionRef} className="flex flex-row">
					<div className="w-[1100px] h-[630px] mr-[200px] p-8 md:w-[700px] md:h-[710px] sm:w-[550px] sm:ml-[100px] mobile:w-[390px] mobile:ml-[100px]">
						<ProjectSection dataObject={ProjectPageInfo.playpack} />
					</div>
					<div className="w-[1100px] h-[630px] mr-[200px] p-8 md:w-[700px] md:h-[710px] sm:w-[550px] sm:ml-[100px] mobile:w-[390px] mobile:ml-[190px]">
						<ProjectSection dataObject={ProjectPageInfo.lotusPortfolio} />
					</div>
					<div className="w-[1100px] h-[630px] mr-[200px] p-8 md:w-[700px] md:h-[710px] sm:w-[550px] sm:ml-[100px] mobile:w-[390px] mobile:ml-[100px]">
						<ProjectSection dataObject={ProjectPageInfo.graduationWork} />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Project;
