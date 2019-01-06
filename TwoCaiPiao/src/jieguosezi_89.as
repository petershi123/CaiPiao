package
{
    import flash.display.*;
	/*
		色字
	*/
    public class jieguosezi_89 extends MovieClip
    {
        public var left:MovieClip;
        public var top:MovieClip;
        public var right:MovieClip;

        public function jieguosezi_89()
        {
            addFrameScript(0, this.frame1, 1, this.frame2, 2, this.frame3, 3, this.frame4, 4, this.frame5, 5, this.frame6);
        }

        function frame1()
        {
            this.top.gotoAndStop(1);
            this.left.gotoAndStop(3);
            this.right.gotoAndStop(2);
            stop();
        }

        function frame2()
        {
            this.top.gotoAndStop(2);
            this.left.gotoAndStop(1);
            this.right.gotoAndStop(3);
        }

        function frame3()
        {
            this.top.gotoAndStop(3);
            this.left.gotoAndStop(4);
            this.right.gotoAndStop(6);
        }

        function frame5()
        {
            this.top.gotoAndStop(5);
            this.left.gotoAndStop(2);
            this.right.gotoAndStop(6);
        }

        function frame6()
        {
            this.top.gotoAndStop(6);
            this.left.gotoAndStop(3);
            this.right.gotoAndStop(4);
        }

        function frame4()
        {
            this.top.gotoAndStop(4);
            this.left.gotoAndStop(5);
            this.right.gotoAndStop(6);
        }

    }
}
