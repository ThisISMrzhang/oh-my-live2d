import type { InternalModel, Live2DModel } from 'pixi-live2d-display';
// import { HitAreaFrames } from 'pixi-live2d-display/extra';
import type { Application } from 'pixi.js';

import type { Live2DModelType, ModelOptions } from '../types/index.js';

export class Model {
  private model: Live2DModel<InternalModel>; // 模型实例
  private failEvent?: (error: Error) => void;

  constructor(
    private live2dModel: Live2DModelType,
    private modelOptions: ModelOptions,
    private application: Application
  ) {
    this.model = this.create();
  }
  create(): Live2DModel<InternalModel> {
    // const hitAreaFrames = new HitAreaFrames();
    const model = this.live2dModel.fromSync(this.modelOptions.path || '', {
      // motionPreload: 'ALL',
      onError: (e) => {
        this.failEvent?.(e);
      }
    });

    model.once('load', () => {
      // model.addChild(hitAreaFrames);

      // setTimeout(() => {
      //   model.removeChildAt(0);
      //   setTimeout(() => {
      //     model.addChild(hitAreaFrames);
      //   }, 1000);
      // }, 1000);
      this.application.stage.addChild(this.model);
      this.application.resize();
      // console.log(model.internalModel.motionManager.motionGroups);
      // console.log(model.internalModel.motionManager.groups);
    });

    // model.on('hit', (hitNames) => {
    //   console.log(hitNames);

    //   void model.motion('Tap', 0);
    //   console.log('ddddddddddd');
    // });

    return model;
  }

  /**
   * 模型资源全部加载完毕的事件回调
   * @param fn
   */
  onLoaded(fn: (modelInfo: { width: number; height: number }) => void): void {
    this.model.once('load', () => {
      fn({ width: this.model.width, height: this.model.height });
    });
  }

  /**
   * 模型加载失败的事件回调
   * @param fn
   */
  onFail(fn: (error: Error) => void): void {
    this.failEvent = fn;
  }
  /**
   * 设置缩放比例
   * @param x
   * @param y
   */
  setScale(x = 0.1, y = 0.1): void {
    this.model.scale.set(x, y);
  }

  /**
   * 设置位置
   * @param x
   * @param y
   */
  setPosition(x = 0, y = 0): void {
    this.model.x = x;
    this.model.y = y;
  }

  /**
   * 切换纹理
   * @param callback
   */
  changeTexture(callback: (options: { status: boolean }) => void): void {
    if (this.model.textures.length <= 1) {
      callback({ status: false });
    } else {
      const currentTexture = this.model.textures.shift();

      this.model.textures.push(currentTexture!);
      callback({ status: true });
    }
  }
}
