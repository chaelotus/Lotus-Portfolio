import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectPageInfo } from '../../../common/constants';
import ProjectSection from '../../../common/components/ProjectSection';

const Project = () => {
	gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 사용시 필수
	const sectionRef = useRef(null); // useRef로 참조할 요소
	const triggerRef = useRef(null);

	// horizontal 스크롤 애니메이션
	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current, // gsap 애니메이션이 시작되는 요소 위치
			// 초기 시작, from 부분
			{
				translateX: 100,
			},
			// 끝 나는 부분, to 부분
			{
				translateX: -3400,
				scrollTrigger: {
					trigger: triggerRef.current, // 스크롤이 발생되는 요소 위치
					start: 'top 130', // trigger의 상단이 뷰포트 상단에 닿을 때
					end: 'bottom center', // 트리거의 하단이 스크롤러의 중앙에 닿을 때
					scrub: 1, // 되감기 기능, 또한 스크롤을 부드러운 애니메이션 추가.
					pin: '.project-section', // 가로스크롤시 페이지를 고정할 수 있는 기능
				},
			},
		);
		return () => {
			pin.kill();
		}; // 모든 애니메이션 중단
	}, []);
	return (
		<section className="relative project-section flex flex-col items-center">
			<h1 className="absolute text-3xl left-0 font-NanumSquareNeoExtraBold">
				PROJECT
			</h1>
			<div
				ref={triggerRef}
				className=" h-[calc(100vh-130px)] w-full flex items-center"
			>
				<div ref={sectionRef} className="flex flex-row">
					<div className="w-[1100px] h-[630px] mr-[200px] p-8">
						<ProjectSection dataObject={ProjectPageInfo.playpack} />
					</div>
					<div className="w-[1100px] h-[630px] mr-[200px] p-8">
						<ProjectSection dataObject={ProjectPageInfo.lotusPortfolio} />
					</div>
					<div className="w-[1100px] h-[630px] mr-[200px] p-8">
						<ProjectSection dataObject={ProjectPageInfo.graduationWork} />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Project;
